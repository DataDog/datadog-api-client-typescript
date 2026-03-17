@endpoint(service-accounts) @endpoint(service-accounts-v2)
Feature: Service Accounts
  Create, edit, and disable service accounts. See the [Service Accounts page
  ](https://docs.datadoghq.com/account_management/org_settings/service_accou
  nts/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceAccounts" API

  @generated @skip
  Scenario: Create a service account returns "Bad Request" response
    Given new "CreateServiceAccount" request
    And body with value {"data": {"attributes": {"email": "jane.doe@example.com", "service_account": true}, "relationships": {"roles": {"data": [{"id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "type": "roles"}]}}, "type": "users"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a service account returns "OK" response
    Given new "CreateServiceAccount" request
    And body with value {"data": {"attributes": {"email": "jane.doe@example.com", "service_account": true}, "relationships": {"roles": {"data": [{"id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "type": "roles"}]}}, "type": "users"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Create an application key for this service account returns "Bad Request" response
    Given new "CreateServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "type": "application_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an application key for this service account returns "Created" response
    Given new "CreateServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "type": "application_keys"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete an application key for this service account returns "No Content" response
    Given new "DeleteServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an application key for this service account returns "Not Found" response
    Given new "DeleteServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an application key for this service account returns "Bad Request" response
    Given new "UpdateServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit an application key for this service account returns "Not Found" response
    Given new "UpdateServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit an application key for this service account returns "OK" response
    Given new "UpdateServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Application Key for managing dashboards", "scopes": ["dashboards_read", "dashboards_write", "dashboards_public_share"]}, "id": "00112233-4455-6677-8899-aabbccddeeff", "type": "application_keys"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get one application key for this service account returns "Not Found" response
    Given new "GetServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get one application key for this service account returns "OK" response
    Given new "GetServiceAccountApplicationKey" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List application keys for this service account returns "Bad Request" response
    Given new "ListServiceAccountApplicationKeys" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List application keys for this service account returns "Not Found" response
    Given new "ListServiceAccountApplicationKeys" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List application keys for this service account returns "OK" response
    Given new "ListServiceAccountApplicationKeys" request
    And request contains "service_account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK
