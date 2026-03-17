@endpoint(microsoft-teams-integration) @endpoint(microsoft-teams-integration-v2)
Feature: Microsoft Teams Integration
  Configure your [Datadog Microsoft Teams
  integration](https://docs.datadoghq.com/integrations/microsoft_teams/)
  directly through the Datadog API. Note: These endpoints do not support
  legacy connector handles.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "MicrosoftTeamsIntegration" API

  @generated @skip
  Scenario: Create Workflows webhook handle returns "Bad Request" response
    Given new "CreateWorkflowsWebhookHandle" request
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Workflows webhook handle returns "CREATED" response
    Given new "CreateWorkflowsWebhookHandle" request
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create Workflows webhook handle returns "Conflict" response
    Given new "CreateWorkflowsWebhookHandle" request
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create Workflows webhook handle returns "Failed Precondition" response
    Given new "CreateWorkflowsWebhookHandle" request
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Create Workflows webhook handle returns "Not Found" response
    Given new "CreateWorkflowsWebhookHandle" request
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create tenant-based handle returns "Bad Request" response
    Given new "CreateTenantBasedHandle" request
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create tenant-based handle returns "CREATED" response
    Given new "CreateTenantBasedHandle" request
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create tenant-based handle returns "Conflict" response
    Given new "CreateTenantBasedHandle" request
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create tenant-based handle returns "Failed Precondition" response
    Given new "CreateTenantBasedHandle" request
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Create tenant-based handle returns "Not Found" response
    Given new "CreateTenantBasedHandle" request
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Workflows webhook handle returns "Bad Request" response
    Given new "DeleteWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Workflows webhook handle returns "Failed Precondition" response
    Given new "DeleteWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Delete Workflows webhook handle returns "OK" response
    Given new "DeleteWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete tenant-based handle returns "Bad Request" response
    Given new "DeleteTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete tenant-based handle returns "Failed Precondition" response
    Given new "DeleteTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Delete tenant-based handle returns "OK" response
    Given new "DeleteTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get Workflows webhook handle information returns "Bad Request" response
    Given new "GetWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Workflows webhook handle information returns "Failed Precondition" response
    Given new "GetWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Get Workflows webhook handle information returns "Not Found" response
    Given new "GetWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Workflows webhook handle information returns "OK" response
    Given new "GetWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all Workflows webhook handles returns "Bad Request" response
    Given new "ListWorkflowsWebhookHandles" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all Workflows webhook handles returns "Failed Precondition" response
    Given new "ListWorkflowsWebhookHandles" request
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Get all Workflows webhook handles returns "Not Found" response
    Given new "ListWorkflowsWebhookHandles" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all Workflows webhook handles returns "OK" response
    Given new "ListWorkflowsWebhookHandles" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all tenant-based handles returns "Bad Request" response
    Given new "ListTenantBasedHandles" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all tenant-based handles returns "Failed Precondition" response
    Given new "ListTenantBasedHandles" request
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Get all tenant-based handles returns "Not Found" response
    Given new "ListTenantBasedHandles" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all tenant-based handles returns "OK" response
    Given new "ListTenantBasedHandles" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get channel information by name returns "Bad Request" response
    Given new "GetChannelByName" request
    And request contains "tenant_name" parameter from "REPLACE.ME"
    And request contains "team_name" parameter from "REPLACE.ME"
    And request contains "channel_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get channel information by name returns "Not Found" response
    Given new "GetChannelByName" request
    And request contains "tenant_name" parameter from "REPLACE.ME"
    And request contains "team_name" parameter from "REPLACE.ME"
    And request contains "channel_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get channel information by name returns "OK" response
    Given new "GetChannelByName" request
    And request contains "tenant_name" parameter from "REPLACE.ME"
    And request contains "team_name" parameter from "REPLACE.ME"
    And request contains "channel_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get tenant-based handle information returns "Bad Request" response
    Given new "GetTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get tenant-based handle information returns "Failed Precondition" response
    Given new "GetTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Get tenant-based handle information returns "Not Found" response
    Given new "GetTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get tenant-based handle information returns "OK" response
    Given new "GetTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Workflows webhook handle returns "Bad Request" response
    Given new "UpdateWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Workflows webhook handle returns "Conflict" response
    Given new "UpdateWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update Workflows webhook handle returns "Failed Precondition" response
    Given new "UpdateWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Update Workflows webhook handle returns "Not Found" response
    Given new "UpdateWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Workflows webhook handle returns "OK" response
    Given new "UpdateWorkflowsWebhookHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "fake-handle-name", "url": "https://fake.url.com"}, "type": "workflows-webhook-handle"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update tenant-based handle returns "Bad Request" response
    Given new "UpdateTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update tenant-based handle returns "Conflict" response
    Given new "UpdateTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update tenant-based handle returns "Failed Precondition" response
    Given new "UpdateTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 412 Failed Precondition

  @generated @skip
  Scenario: Update tenant-based handle returns "Not Found" response
    Given new "UpdateTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update tenant-based handle returns "OK" response
    Given new "UpdateTenantBasedHandle" request
    And request contains "handle_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"channel_id": "fake-channel-id", "name": "fake-handle-name", "team_id": "00000000-0000-0000-0000-000000000000", "tenant_id": "00000000-0000-0000-0000-000000000001"}, "type": "tenant-based-handle"}}
    When the request is sent
    Then the response status is 200 OK
