terraform {
  backend "azurerm" {
    resource_group_name  = var.resource_group_name
    storage_account_name = local.storage_account_name
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}
