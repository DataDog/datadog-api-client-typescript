@endpoint(google-chat-integration) @endpoint(google-chat-integration-v2)
Feature: Google Chat Integration
  Configure your [Datadog Google Chat
  integration](https://docs.datadoghq.com/integrations/google-hangouts-
  chat/) directly through the Datadog API.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "GoogleChatIntegration" API

  @generated @skip
  Scenario: Create organization handle returns "Bad Request" response
    Given new "CreateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create organization handle returns "CREATED" response
    Given new "CreateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create organization handle returns "Conflict" response
    Given new "CreateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create organization handle returns "Not Found" response
    Given new "CreateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete organization handle returns "Bad Request" response
    Given new "DeleteOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete organization handle returns "OK" response
    Given new "DeleteOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get all organization handles returns "Bad Request" response
    Given new "ListOrganizationHandles" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all organization handles returns "Not Found" response
    Given new "ListOrganizationHandles" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all organization handles returns "OK" response
    Given new "ListOrganizationHandles" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get organization handle returns "Bad Request" response
    Given new "GetOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get organization handle returns "Not Found" response
    Given new "GetOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get organization handle returns "OK" response
    Given new "GetOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get space information by display name returns "Bad Request" response
    Given new "GetSpaceByDisplayName" request
    And request contains "domain_name" parameter from "REPLACE.ME"
    And request contains "space_display_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get space information by display name returns "Not Found" response
    Given new "GetSpaceByDisplayName" request
    And request contains "domain_name" parameter from "REPLACE.ME"
    And request contains "space_display_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get space information by display name returns "OK" response
    Given new "GetSpaceByDisplayName" request
    And request contains "domain_name" parameter from "REPLACE.ME"
    And request contains "space_display_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update organization handle returns "Bad Request" response
    Given new "UpdateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update organization handle returns "Conflict" response
    Given new "UpdateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update organization handle returns "Not Found" response
    Given new "UpdateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update organization handle returns "OK" response
    Given new "UpdateOrganizationHandle" request
    And request contains "organization_binding_id" parameter from "REPLACE.ME"
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "space_resource_name": "spaces/AAAAAAAAA"}}, "type": "google-chat-organization-handle"}
    When the request is sent
    Then the response status is 200 OK
