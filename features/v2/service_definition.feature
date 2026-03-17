@endpoint(service-definition) @endpoint(service-definition-v2)
Feature: Service Definition
  API to create, update, retrieve and delete service definitions. Note:
  Service Catalog [v3.0 schema](https://docs.datadoghq.com/service_catalog/s
  ervice_definitions/v3-0/) has new API endpoints documented under [Software
  Catalog](https://docs.datadoghq.com/api/latest/software-catalog/). Use the
  following Service Definition endpoints for v2.2 and earlier.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceDefinition" API

  @generated @skip
  Scenario: Create or update service definition returns "Bad Request" response
    Given new "CreateOrUpdateServiceDefinitions" request
    And body with value {"application": "my-app", "ci-pipeline-fingerprints": ["j88xdEy0J5lc", "eZ7LMljCk8vo"], "contacts": [{"contact": "https://teams.microsoft.com/myteam", "name": "My team channel", "type": "slack"}], "dd-service": "my-service", "description": "My service description", "extensions": {"myorg/extension": "extensionValue"}, "integrations": {"opsgenie": {"region": "US", "service-url": "https://my-org.opsgenie.com/service/123e4567-e89b-12d3-a456-426614174000"}, "pagerduty": {"service-url": "https://my-org.pagerduty.com/service-directory/PMyService"}}, "languages": ["dotnet", "go", "java", "js", "php", "python", "ruby", "c++"], "lifecycle": "sandbox", "links": [{"name": "Runbook", "provider": "Github", "type": "runbook", "url": "https://my-runbook"}], "schema-version": "v2.2", "tags": ["my:tag", "service:tag"], "team": "my-team", "tier": "High", "type": "web"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create or update service definition returns "CREATED" response
    Given new "CreateOrUpdateServiceDefinitions" request
    And body with value {"application": "my-app", "ci-pipeline-fingerprints": ["j88xdEy0J5lc", "eZ7LMljCk8vo"], "contacts": [{"contact": "https://teams.microsoft.com/myteam", "name": "My team channel", "type": "slack"}], "dd-service": "my-service", "description": "My service description", "extensions": {"myorg/extension": "extensionValue"}, "integrations": {"opsgenie": {"region": "US", "service-url": "https://my-org.opsgenie.com/service/123e4567-e89b-12d3-a456-426614174000"}, "pagerduty": {"service-url": "https://my-org.pagerduty.com/service-directory/PMyService"}}, "languages": ["dotnet", "go", "java", "js", "php", "python", "ruby", "c++"], "lifecycle": "sandbox", "links": [{"name": "Runbook", "provider": "Github", "type": "runbook", "url": "https://my-runbook"}], "schema-version": "v2.2", "tags": ["my:tag", "service:tag"], "team": "my-team", "tier": "High", "type": "web"}
    When the request is sent
    Then the response status is 200 CREATED

  @generated @skip
  Scenario: Create or update service definition returns "Conflict" response
    Given new "CreateOrUpdateServiceDefinitions" request
    And body with value {"application": "my-app", "ci-pipeline-fingerprints": ["j88xdEy0J5lc", "eZ7LMljCk8vo"], "contacts": [{"contact": "https://teams.microsoft.com/myteam", "name": "My team channel", "type": "slack"}], "dd-service": "my-service", "description": "My service description", "extensions": {"myorg/extension": "extensionValue"}, "integrations": {"opsgenie": {"region": "US", "service-url": "https://my-org.opsgenie.com/service/123e4567-e89b-12d3-a456-426614174000"}, "pagerduty": {"service-url": "https://my-org.pagerduty.com/service-directory/PMyService"}}, "languages": ["dotnet", "go", "java", "js", "php", "python", "ruby", "c++"], "lifecycle": "sandbox", "links": [{"name": "Runbook", "provider": "Github", "type": "runbook", "url": "https://my-runbook"}], "schema-version": "v2.2", "tags": ["my:tag", "service:tag"], "team": "my-team", "tier": "High", "type": "web"}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete a single service definition returns "Bad Request" response
    Given new "DeleteServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a single service definition returns "Not Found" response
    Given new "DeleteServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a single service definition returns "OK" response
    Given new "DeleteServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a single service definition returns "Bad Request" response
    Given new "GetServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a single service definition returns "Conflict" response
    Given new "GetServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Get a single service definition returns "Not Found" response
    Given new "GetServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a single service definition returns "OK" response
    Given new "GetServiceDefinition" request
    And request contains "service_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all service definitions returns "OK" response
    Given new "ListServiceDefinitions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all service definitions returns "OK" response with pagination
    Given new "ListServiceDefinitions" request
    When the request with pagination is sent
    Then the response status is 200 OK
