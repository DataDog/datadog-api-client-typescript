@endpoint(azure-integration) @endpoint(azure-integration-v1)
Feature: Azure Integration
  Configure your Datadog-Azure integration directly through the Datadog API.
  For more information, see the [Datadog-Azure integration
  page](https://docs.datadoghq.com/integrations/azure).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "AzureIntegration" API

  @generated @skip
  Scenario: Create an Azure integration returns "Bad Request" response
    Given new "CreateAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an Azure integration returns "OK" response
    Given new "CreateAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete an Azure integration returns "Bad Request" response
    Given new "DeleteAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an Azure integration returns "OK" response
    Given new "DeleteAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List all Azure integrations returns "Bad Request" response
    Given new "ListAzureIntegration" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List all Azure integrations returns "OK" response
    Given new "ListAzureIntegration" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Azure integration host filters returns "Bad Request" response
    Given new "UpdateAzureHostFilters" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Azure integration host filters returns "OK" response
    Given new "UpdateAzureHostFilters" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an Azure integration returns "Bad Request" response
    Given new "UpdateAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an Azure integration returns "OK" response
    Given new "UpdateAzureIntegration" request
    And body with value {"app_service_plan_filters": "key:value,filter:example", "automute": true, "client_id": "testc7f6-1234-5678-9101-3fcbf464test", "client_secret": "TestingRh2nx664kUy5dIApvM54T4AtO", "container_app_filters": "key:value,filter:example", "cspm_enabled": true, "custom_metrics_enabled": true, "errors": ["*"], "host_filters": "key:value,filter:example", "metrics_enabled": true, "metrics_enabled_default": true, "new_client_id": "new1c7f6-1234-5678-9101-3fcbf464test", "new_tenant_name": "new1c44-1234-5678-9101-cc00736ftest", "resource_collection_enabled": true, "resource_provider_configs": [{"metrics_enabled": true, "namespace": "Microsoft.Compute"}], "tenant_name": "testc44-1234-5678-9101-cc00736ftest", "usage_metrics_enabled": true}
    When the request is sent
    Then the response status is 200 OK
