@endpoint(action-connection) @endpoint(action-connection-v2)
Feature: Action Connection
  Action connections extend your installed integrations and allow you to
  take action in your third-party systems (e.g. AWS, GitLab, and Statuspage)
  with Datadog’s Workflow Automation and App Builder products.  Datadog’s
  Integrations automatically provide authentication for Slack, Microsoft
  Teams, PagerDuty, Opsgenie, JIRA, GitHub, and Statuspage. You do not need
  additional connections in order to access these tools within Workflow
  Automation and App Builder.  We offer granular access control for editing
  and resolving connections.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ActionConnection" API

  @generated @skip
  Scenario: Create a new Action Connection returns "Bad Request" response
    Given new "CreateActionConnection" request
    And body with value {"data": {"attributes": {"integration": {"credentials": {"account_id": "111222333444", "role": "my-role", "type": "AWSAssumeRole"}, "type": "AWS"}, "name": "My AWS Connection"}, "type": "action_connection"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new Action Connection returns "Successfully created Action Connection" response
    Given new "CreateActionConnection" request
    And body with value {"data": {"attributes": {"integration": {"credentials": {"account_id": "111222333444", "role": "my-role", "type": "AWSAssumeRole"}, "type": "AWS"}, "name": "My AWS Connection"}, "type": "action_connection"}}
    When the request is sent
    Then the response status is 201 Successfully created Action Connection

  @generated @skip
  Scenario: Delete an existing Action Connection returns "Not Found" response
    Given new "DeleteActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an existing Action Connection returns "The resource was deleted successfully." response
    Given new "DeleteActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 The resource was deleted successfully.

  @generated @skip
  Scenario: Get an existing Action Connection returns "Bad Request" response
    Given new "GetActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an existing Action Connection returns "Not Found" response
    Given new "GetActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an existing Action Connection returns "Successfully get Action Connection" response
    Given new "GetActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Successfully get Action Connection

  @generated @skip
  Scenario: Get an existing App Key Registration returns "Bad request" response
    Given new "GetAppKeyRegistration" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Get an existing App Key Registration returns "Not found" response
    Given new "GetAppKeyRegistration" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get an existing App Key Registration returns "OK" response
    Given new "GetAppKeyRegistration" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List App Key Registrations returns "Bad request" response
    Given new "ListAppKeyRegistrations" request
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: List App Key Registrations returns "OK" response
    Given new "ListAppKeyRegistrations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Register a new App Key returns "Bad request" response
    Given new "RegisterAppKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Register a new App Key returns "Created" response
    Given new "RegisterAppKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Unregister an App Key returns "Bad request" response
    Given new "UnregisterAppKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Unregister an App Key returns "No Content" response
    Given new "UnregisterAppKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Unregister an App Key returns "Not found" response
    Given new "UnregisterAppKey" request
    And request contains "app_key_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Update an existing Action Connection returns "Bad Request" response
    Given new "UpdateActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"integration": {"credentials": {"account_id": "111222333444", "role": "my-role", "type": "AWSAssumeRole"}, "type": "AWS"}, "name": "My AWS Connection"}, "type": "action_connection"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an existing Action Connection returns "Not Found" response
    Given new "UpdateActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"integration": {"credentials": {"account_id": "111222333444", "role": "my-role", "type": "AWSAssumeRole"}, "type": "AWS"}, "name": "My AWS Connection"}, "type": "action_connection"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an existing Action Connection returns "Successfully updated Action Connection" response
    Given new "UpdateActionConnection" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"integration": {"credentials": {"account_id": "111222333444", "role": "my-role", "type": "AWSAssumeRole"}, "type": "AWS"}, "name": "My AWS Connection"}, "type": "action_connection"}}
    When the request is sent
    Then the response status is 200 Successfully updated Action Connection
