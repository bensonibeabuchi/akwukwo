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
variable "app_insights_name" {
  description = "Application Insight name"
  default     = "akwukwo-ai"
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

variable "log_analytics_workspace_name" {
  type = string
  default = "akwukwo-law"
}
variable "subnet" {
  type = string
  default = "akwukwo-subnet"
}

variable "supabase_anon_key" {
  type      = string
  sensitive = true
}

# variable "supabase_service_key" {
#   type      = string
#   sensitive = true
# }

variable "supabase_url" {
  type = string
}

variable "supabase_host" {
  type = string
}

variable "supabase_url" {}
variable "supabase_anon_key" {}
variable "database_url" {}

variable "staging_supabase_url" {}
variable "staging_supabase_anon_key" {}
variable "staging_database_url" {}



