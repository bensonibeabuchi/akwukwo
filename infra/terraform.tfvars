# Resource group and location
resource_group_name   = "akwukwo-rg"
location              = "canadacentral"

# App Service Plan and Web App
app_service_plan_name = "akwukwo-asplan"
app_service_name      = "akwukwo"
app_insights_name      = "akwukwo-ai"

# Docker Hub username (not sensitive, can remain in tfvars)
dockerhub_username    = "bensonibeabuchi"

# Key Vault unique suffix (for naming)
suffix                = "003"

