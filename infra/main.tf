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
  name = "akwukwo-subnet"
  resource_group_name = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes = ["10.0.1.0/24"]
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
  name = "akwukwo-ai"
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type = "web"
}

# 8️⃣ Key Vault
resource "azurerm_key_vault" "kv" {
  name = "akwukwo-kv-${var.suffix}"
  location = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  tenant_id = data.azurerm_client_config.current.tenant_id
  sku_name = "standard"
  soft_delete_retention_days = 7
  purge_protection_enabled = false

  # Optional: allow App Service managed identity to read secrets
#  access_policy {
#     tenant_id = data.azurerm_client_config.current.tenant_id
#     object_id = azurerm_linux_web_app.app.identity[0].principal_id
#
#   secret_permissions = [
#    "Get",
#   "List"
#   ]
# }
}

# 9️⃣ Key Vault Secrets
resource "azurerm_key_vault_secret" "dockerhub_password" {
  name = "dockerhub-password"
  value = var.dockerhub_password
  key_vault_id = azurerm_key_vault.kv.id
}

resource "azurerm_key_vault_secret" "db_url" {
  name = "database-url"
  value = var.database_url
  key_vault_id = azurerm_key_vault.kv.id
}

# 1️⃣0️⃣ Assign Key Vault Access Policy to App Service Managed Identity
resource "azurerm_key_vault_access_policy" "app_policy" {
  key_vault_id = azurerm_key_vault.kv.id
  tenant_id = data.azurerm_client_config.current.tenant_id
  object_id = azurerm_linux_web_app.app.identity[0].principal_id

  secret_permissions = [
    "Get",
    "List"
  ]
}

# 1️⃣1️⃣ Linux Web App (Docker-based) with SystemAssigned identity
resource "azurerm_linux_web_app" "app" {
  name                = var.app_service_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.asp.id

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
  }

  depends_on = [azurerm_key_vault_access_policy.app_policy]
}
