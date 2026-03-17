@endpoint(org-connections) @endpoint(org-connections-v2)
Feature: Org Connections
  Manage connections between organizations. Org connections allow for
  controlled sharing of data between different Datadog organizations. See
  the [Cross-Organization Visibiltiy](https://docs.datadoghq.com/account_man
  agement/org_settings/cross_org_visibility/) page for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "OrgConnections" API

  @generated @skip
  Scenario: Create Org Connection returns "Bad Request" response
    Given new "CreateOrgConnections" request
    And body with value {"data": {"attributes": {"connection_types": ["logs"]}, "relationships": {"sink_org": {"data": {"id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "name": "Example Org", "type": "orgs"}}}, "type": "org_connection"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Org Connection returns "Conflict" response
    Given new "CreateOrgConnections" request
    And body with value {"data": {"attributes": {"connection_types": ["logs"]}, "relationships": {"sink_org": {"data": {"id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "name": "Example Org", "type": "orgs"}}}, "type": "org_connection"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create Org Connection returns "Not Found" response
    Given new "CreateOrgConnections" request
    And body with value {"data": {"attributes": {"connection_types": ["logs"]}, "relationships": {"sink_org": {"data": {"id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "name": "Example Org", "type": "orgs"}}}, "type": "org_connection"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create Org Connection returns "OK" response
    Given new "CreateOrgConnections" request
    And body with value {"data": {"attributes": {"connection_types": ["logs"]}, "relationships": {"sink_org": {"data": {"id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "name": "Example Org", "type": "orgs"}}}, "type": "org_connection"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete Org Connection returns "Bad Request" response
    Given new "DeleteOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Org Connection returns "Not Found" response
    Given new "DeleteOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Org Connection returns "OK" response
    Given new "DeleteOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Org Connections returns "OK" response
    Given new "ListOrgConnections" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Org Connection returns "Bad Request" response
    Given new "UpdateOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"connection_types": ["logs", "metrics"]}, "id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "type": "org_connection"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Org Connection returns "Not Found" response
    Given new "UpdateOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"connection_types": ["logs", "metrics"]}, "id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "type": "org_connection"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Org Connection returns "OK" response
    Given new "UpdateOrgConnections" request
    And request contains "connection_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"connection_types": ["logs", "metrics"]}, "id": "f9ec96b0-8c8a-4b0a-9b0a-1b2c3d4e5f6a", "type": "org_connection"}}
    When the request is sent
    Then the response status is 200 OK
