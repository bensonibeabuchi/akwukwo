# Client config
data "azurerm_client_config" "current" {}

# 1️⃣ Resource Group
resource "azurerm_resource_group" "rg" {
  name = var.resource_group_name
  location = var.location
}

# 2️⃣ Virtual Network
resource "azurerm_virtual_network" "vnet" {
  name = "akwukwo-vnet"
  address_space = ["10.0.0.0/16"]
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
}

# 3️⃣ Subnet
resource "azurerm_subnet" "subnet" {
  name = var.subnet
  resource_group_name = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes = ["10.0.1.0/24"]

  delegation {
    name = "webapp_delegation"

    service_delegation {
      name = "Microsoft.Web/serverFarms"

      actions = [
        "Microsoft.Network/virtualNetworks/subnets/action"
      ]
    }
  }
}

# 4️⃣ Network Security Group
resource "azurerm_network_security_group" "nsg" {
  name = "akwukwo-nsg"
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  security_rule {
    name = "AllowHTTP"
    priority = 100
    direction = "Inbound"
    access = "Allow"
    protocol = "Tcp"
    source_port_range = "*"
    destination_port_range = "80"
    source_address_prefix = "*"
    destination_address_prefix = "*"
  }

  security_rule {
    name = "AllowHTTPS"
    priority = 110
    direction = "Inbound"
    access = "Allow"
    protocol = "Tcp"
    source_port_range = "*"
    destination_port_range = "443"
    source_address_prefix = "*"
    destination_address_prefix = "*"
  }
}

# 5️⃣ Subnet NSG Association
resource "azurerm_subnet_network_security_group_association" "subnet_nsg" {
  subnet_id = azurerm_subnet.subnet.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}

# 6️⃣ App Service Plan (Linux, Standard S1)
resource "azurerm_service_plan" "asp" {
  name = var.app_service_plan_name
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type = "Linux"
  sku_name = "S1"
}


# 7️⃣ Application Insights
resource "azurerm_application_insights" "appinsights" {
  name = var.app_insights_name
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type = "web"

  workspace_id = azurerm_log_analytics_workspace.law.id
}

# Log Analytics Workspace
resource "azurerm_log_analytics_workspace" "law" {
  name                = var.log_analytics_workspace_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# ------------------------------
# Key Vault
# ------------------------------
resource "azurerm_key_vault" "kv" {
  name                        = "akwukwo-kv-${var.suffix}"
  location                    = azurerm_resource_group.rg.location
  resource_group_name         = azurerm_resource_group.rg.name
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  sku_name                     = "standard"
  soft_delete_retention_days  = 7
  purge_protection_enabled     = false
}

# ------------------------------
# 9️⃣ Key Vault Secrets
# ------------------------------
resource "azurerm_key_vault_secret" "dockerhub_password" {
  name         = "dockerhub-password"
  value        = var.dockerhub_password
  key_vault_id = azurerm_key_vault.kv.id

  lifecycle {
    ignore_changes = [value]   # <-- avoids overwriting existing secret
  }
}

resource "azurerm_key_vault_secret" "db_url" {
  name         = "database-url"
  value        = var.database_url
  key_vault_id = azurerm_key_vault.kv.id

  lifecycle {
    ignore_changes = [value]
  }
}

resource "azurerm_key_vault_secret" "supabase_anon_key" {
  name         = "supabase-anon-key"
  value        = var.supabase_anon_key
  key_vault_id = azurerm_key_vault.kv.id

  lifecycle {
    ignore_changes = [value]
  }
}

# ------------------------------
# 1️⃣0️⃣ Key Vault Access Policies
# ------------------------------

# App Service Managed Identity policy
resource "azurerm_key_vault_access_policy" "app_policy" {
  key_vault_id = azurerm_key_vault.kv.id
  tenant_id    = data.azurerm_client_config.current.tenant_id
  object_id    = azurerm_linux_web_app.app_with_secrets.identity[0].principal_id

  secret_permissions = ["Get", "Set", "List"]


}

# Admin / Terraform operator policy
resource "azurerm_key_vault_access_policy" "admin_policy" {
  key_vault_id = azurerm_key_vault.kv.id
  tenant_id    = data.azurerm_client_config.current.tenant_id
  object_id    = data.azurerm_client_config.current.object_id

  secret_permissions = ["Get", "Set", "List", "Delete"]

  lifecycle {
    ignore_changes = [secret_permissions]
  }
}

# resource "azurerm_key_vault_access_policy" "terraform" {
#   key_vault_id = azurerm_key_vault.kv.id
#   tenant_id    = data.azurerm_client_config.current.tenant_id
#   object_id    = azurerm_linux_web_app.app.identity[0].principal_id  # Terraform's service principal

#   secret_permissions = [
#     "Get",
#     "List",
#     "Set"
#   ]
#   lifecycle {
#     prevent_destroy = true
#     ignore_changes  = all
#   }
# }

# 1️⃣1️⃣ Linux Web App (Docker-based) with SystemAssigned identity
# resource "azurerm_linux_web_app" "app" {
#   name                = var.app_service_name
#   resource_group_name = azurerm_resource_group.rg.name
#   location            = azurerm_resource_group.rg.location
#   service_plan_id     = azurerm_service_plan.asp.id

#   identity {
#     type = "SystemAssigned"
#   }

#   site_config {
#     always_on = true
#     application_stack {
#       docker_image     = "${var.dockerhub_username}/akwukwo"
#       docker_image_tag = "latest"
#     }
#   }
# }

# resource "azurerm_linux_web_app_slot" "staging" {
#   name = "staging"
#   app_service_id      = azurerm_linux_web_app.app_with_secrets.id

#   identity {
#     type = "SystemAssigned"
#   }

#   site_config {
#     always_on = true
#     application_stack {
#       docker_image     = "${var.dockerhub_username}/akwukwo"
#       docker_image_tag = "latest"
#     }
#   }

#   app_settings = azurerm_linux_web_app.app_with_secrets.app_settings

#   depends_on = [azurerm_key_vault_access_policy.app_policy]
# }

resource "azurerm_linux_web_app" "app" {
  name                = var.app_service_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    # Production only settings
    "SUPABASE_URL"                = var.supabase_url
    "SUPABASE_ANON_KEY"           = var.supabase_anon_key
    "DATABASE_URL"                = var.database_url
    "NEXT_PUBLIC_SUPABASE_URL"    = var.supabase_url
    "NEXT_PUBLIC_SUPABASE_ANON_KEY" = var.supabase_anon_key

    # Required
    "DOCKER_REGISTRY_SERVER_URL"   = "https://index.docker.io"
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.docker_username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.docker_password
  }

  # Tell Azure: these are production-only (sticky)
  app_settings_slot_sticky = [
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "DATABASE_URL"
  ]

  identity {
    type = "SystemAssigned"
  }
}


# ================================
#         DEPLOYMENT SLOT
# ================================

resource "azurerm_linux_web_app_slot" "staging" {
  name                 = "staging"
  app_service_id       = azurerm_linux_web_app.app.id
  service_plan_id      = azurerm_service_plan.plan.id

  site_config {
    always_on = true
  }

  app_settings = {
    "SUPABASE_URL"                = var.staging_supabase_url
    "SUPABASE_ANON_KEY"           = var.staging_supabase_anon_key
    "NEXT_PUBLIC_SUPABASE_URL"    = var.staging_supabase_url
    "NEXT_PUBLIC_SUPABASE_ANON_KEY" = var.staging_supabase_anon_key
    "DATABASE_URL"                = var.staging_database_url

    "DOCKER_REGISTRY_SERVER_URL"      = "https://index.docker.io"
    "DOCKER_REGISTRY_SERVER_USERNAME" = var.docker_username
    "DOCKER_REGISTRY_SERVER_PASSWORD" = var.docker_password
  }

  # These settings remain specific to the staging slot only
  app_settings_slot_sticky = [
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "DATABASE_URL"
  ]
}


# 1️⃣2️⃣ VNet Integration
resource "azurerm_app_service_virtual_network_swift_connection" "vnet_integration" {
  app_service_id = azurerm_linux_web_app.app.id
  subnet_id = azurerm_subnet.subnet.id
}

# Update App Service with Key Vault secrets in app settings
resource "azurerm_linux_web_app" "app_with_secrets" {
  name                = azurerm_linux_web_app.app.name
  resource_group_name = azurerm_linux_web_app.app.resource_group_name
  location            = azurerm_linux_web_app.app.location
  service_plan_id     = azurerm_linux_web_app.app.service_plan_id

  identity {
    type = "SystemAssigned"
  }

  site_config {
    always_on = true
    application_stack {
      docker_image     = "${var.dockerhub_username}/akwukwo"
      docker_image_tag = "latest"
    }
  }

  app_settings = {
    DOCKER_REGISTRY_SERVER_URL      = "https://index.docker.io"
    DOCKER_REGISTRY_SERVER_USERNAME = var.dockerhub_username
    DOCKER_REGISTRY_SERVER_PASSWORD = "@Microsoft.KeyVault(SecretUri=${azurerm_key_vault_secret.dockerhub_password.id})"
    DATABASE_URL                    = "@Microsoft.KeyVault(SecretUri=${azurerm_key_vault_secret.db_url.id})"
      # ⭐ Supabase public runtime vars (NOT secrets)
    NEXT_PUBLIC_SUPABASE_URL        = var.supabase_url
    NEXT_PUBLIC_SUPABASE_HOST       = var.supabase_host
    # ⭐ Supabase secret keys (stored in Key Vault)
    NEXT_PUBLIC_SUPABASE_ANON_KEY   = "@Microsoft.KeyVault(SecretUri=${azurerm_key_vault_secret.supabase_anon_key.id})"
    SUPABASE_KEY                    = "@Microsoft.KeyVault(SecretUri=${azurerm_key_vault_secret.supabase_anon_key.id})"
  }

}
