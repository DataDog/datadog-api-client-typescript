@endpoint(key-management) @endpoint(key-management-v2)
Feature: Key Management
  Manage your Datadog API and application keys. You need an API key and an
  application key for a user with the required permissions to interact with
  these endpoints.  Consult the following pages to view and manage your
  keys:  - [API Keys](https://app.datadoghq.com/organization-settings/api-
  keys) - [Application Keys](https://app.datadoghq.com/personal-
  settings/application-keys)

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "KeyManagement" API

  @generated @skip
  Scenario: Create an API key returns "Bad Request" response
    Given new "CreateAPIKey" request
    And body with value {"data": {"attributes": {"name": "API Key for submitting metrics"}, "type": "api_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an API key returns "Created" response
    Given new "CreateAPIKey" request
    And body with value {"data": {"attributes": {"name": "API Key for submitting metrics"}, "type": "api_keys"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create an application key for current user returns "Bad Request" response
    Given new "CreateCurrentUserApplicationKey" request
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "type": "application_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an application key for current user returns "Created" response
    Given new "CreateCurrentUserApplicationKey" request
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "type": "application_keys"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete an API key returns "No Content" response
    Given new "DeleteAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an API key returns "Not Found" response
    Given new "DeleteAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an application key owned by current user returns "No Content" response
    Given new "DeleteCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an application key owned by current user returns "Not Found" response
    Given new "DeleteCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an application key returns "No Content" response
    Given new "DeleteApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an application key returns "Not Found" response
    Given new "DeleteApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an API key returns "Bad Request" response
    Given new "UpdateAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "API Key for submitting metrics"}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "api_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit an API key returns "Not Found" response
    Given new "UpdateAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "API Key for submitting metrics"}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "api_keys"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an API key returns "OK" response
    Given new "UpdateAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "API Key for submitting metrics"}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "api_keys"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit an application key owned by current user returns "Bad Request" response
    Given new "UpdateCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit an application key owned by current user returns "Not Found" response
    Given new "UpdateCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an application key owned by current user returns "OK" response
    Given new "UpdateCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit an application key returns "Bad Request" response
    Given new "UpdateApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit an application key returns "Not Found" response
    Given new "UpdateApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an application key returns "OK" response
    Given new "UpdateApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get API key returns "Not Found" response
    Given new "GetAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get API key returns "OK" response
    Given new "GetAPIKey" request
    And request contains "api_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all API keys returns "Bad Request" response
    Given new "ListAPIKeys" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all API keys returns "OK" response
    Given new "ListAPIKeys" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all application keys owned by current user returns "Bad Request" response
    Given new "ListCurrentUserApplicationKeys" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all application keys owned by current user returns "Not Found" response
    Given new "ListCurrentUserApplicationKeys" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all application keys owned by current user returns "OK" response
    Given new "ListCurrentUserApplicationKeys" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all application keys returns "Bad Request" response
    Given new "ListApplicationKeys" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all application keys returns "Not Found" response
    Given new "ListApplicationKeys" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all application keys returns "OK" response
    Given new "ListApplicationKeys" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an application key returns "Bad Request" response
    Given new "GetApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an application key returns "Not Found" response
    Given new "GetApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an application key returns "OK" response
    Given new "GetApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get one application key owned by current user returns "Not Found" response
    Given new "GetCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get one application key owned by current user returns "OK" response
    Given new "GetCurrentUserApplicationKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK
