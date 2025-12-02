output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "app_service_url" {
  value = "https://${azurerm_linux_web_app.app.default_hostname}"
}

output "app_insights_instrumentation_key" {
  value = azurerm_application_insights.appinsights.instrumentation_key
}

output "key_vault_name" {
  value = azurerm_key_vault.kv.name
}
