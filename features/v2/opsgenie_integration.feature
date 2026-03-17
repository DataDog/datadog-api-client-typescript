@endpoint(opsgenie-integration) @endpoint(opsgenie-integration-v2)
Feature: Opsgenie Integration
  Configure your [Datadog Opsgenie
  integration](https://docs.datadoghq.com/integrations/opsgenie/) directly
  through the Datadog API.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "OpsgenieIntegration" API

  @generated @skip
  Scenario: Create a new service object returns "Bad Request" response
    Given new "CreateOpsgenieService" request
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new service object returns "CREATED" response
    Given new "CreateOpsgenieService" request
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create a new service object returns "Conflict" response
    Given new "CreateOpsgenieService" request
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete a single service object returns "Bad Request" response
    Given new "DeleteOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a single service object returns "Not Found" response
    Given new "DeleteOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a single service object returns "OK" response
    Given new "DeleteOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a single service object returns "Bad Request" response
    Given new "GetOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a single service object returns "Conflict" response
    Given new "GetOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Get a single service object returns "Not Found" response
    Given new "GetOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a single service object returns "OK" response
    Given new "GetOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all service objects returns "OK" response
    Given new "ListOpsgenieServices" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a single service object returns "Bad Request" response
    Given new "UpdateOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "id": "596da4af-0563-4097-90ff-07230c3f9db3", "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a single service object returns "Conflict" response
    Given new "UpdateOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "id": "596da4af-0563-4097-90ff-07230c3f9db3", "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update a single service object returns "Not Found" response
    Given new "UpdateOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "id": "596da4af-0563-4097-90ff-07230c3f9db3", "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a single service object returns "OK" response
    Given new "UpdateOpsgenieService" request
    And request contains "integration_service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"custom_url": "https://example.com", "name": "fake-opsgenie-service-name", "opsgenie_api_key": "00000000-0000-0000-0000-000000000000", "region": "us"}, "id": "596da4af-0563-4097-90ff-07230c3f9db3", "type": "opsgenie-service"}}
    When the request is sent
    Then the response status is 200 OK
