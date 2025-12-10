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

# supabase_url          = "https://prod.supabase.co"
# supabase_anon_key     = "prod_anon_key"
# database_url          = "prod_db_url"

# staging_supabase_url      = "https://staging.supabase.co"
# staging_supabase_anon_key = "staging_anon_key"
# staging_database_url      = "staging_db_url"
