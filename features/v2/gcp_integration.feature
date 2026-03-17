@endpoint(gcp-integration) @endpoint(gcp-integration-v2)
Feature: GCP Integration
  Configure your Datadog-Google Cloud Platform (GCP) integration directly
  through the Datadog API. Read more about the [Datadog-Google Cloud
  Platform integration](https://docs.datadoghq.com/integrations/google_cloud
  _platform).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "GCPIntegration" API

  @generated @skip
  Scenario: Create a Datadog GCP principal returns "Conflict" response
    Given new "MakeGCPSTSDelegate" request
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a Datadog GCP principal returns "OK" response
    Given new "MakeGCPSTSDelegate" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a new entry for your service account returns "Bad Request" response
    Given new "CreateGCPSTSAccount" request
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new entry for your service account returns "Conflict" response
    Given new "CreateGCPSTSAccount" request
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a new entry for your service account returns "OK" response
    Given new "CreateGCPSTSAccount" request
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete an STS enabled GCP Account returns "Bad Request" response
    Given new "DeleteGCPSTSAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an STS enabled GCP Account returns "No Content" response
    Given new "DeleteGCPSTSAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: List all GCP STS-enabled service accounts returns "Not Found" response
    Given new "ListGCPSTSAccounts" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List all GCP STS-enabled service accounts returns "OK" response
    Given new "ListGCPSTSAccounts" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List delegate account returns "OK" response
    Given new "GetGCPSTSDelegate" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update STS Service Account returns "Bad Request" response
    Given new "UpdateGCPSTSAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "id": "d291291f-12c2-22g4-j290-123456678897", "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update STS Service Account returns "Not Found" response
    Given new "UpdateGCPSTSAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "id": "d291291f-12c2-22g4-j290-123456678897", "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update STS Service Account returns "OK" response
    Given new "UpdateGCPSTSAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": [], "client_email": "datadog-service-account@test-project.iam.gserviceaccount.com", "cloud_run_revision_filters": ["$KEY:$VALUE"], "host_filters": ["$KEY:$VALUE"], "is_global_location_enabled": true, "is_per_project_quota_enabled": true, "is_resource_change_collection_enabled": true, "is_security_command_center_enabled": true, "metric_namespace_configs": [{"disabled": true, "id": "aiplatform"}, {"filters": ["snapshot.*", "!*_by_region"], "id": "pubsub"}], "monitored_resource_configs": [{"filters": ["$KEY:$VALUE"], "type": "gce_instance"}], "region_filter_configs": ["nam4", "europe-north1"]}, "id": "d291291f-12c2-22g4-j290-123456678897", "type": "gcp_service_account"}}
    When the request is sent
    Then the response status is 201 OK
