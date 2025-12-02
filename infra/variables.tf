variable "resource_group_name" {
  description = "Name of the resource group"
  default     = "akwukwo-rg"
}

variable "location" {
  description = "Azure region"
  default     = "canadacentral"
}

variable "app_service_plan_name" {
  description = "Name of the App Service Plan"
  default     = "akwukwo-asplan"
}

variable "app_service_name" {
  description = "Name of the Web App"
  default     = "akwukwo"
}

variable "dockerhub_username" {
  description = "Docker Hub username"
}

variable "dockerhub_password" {
  description = "Docker Hub personal access token"
  sensitive   = true
}

variable "suffix" {
  description = "Unique suffix for Key Vault and other resources"
  default     = "003"
}

variable "database_url" {
  description = "Database URL to store in Key Vault"
  sensitive   = true
}
