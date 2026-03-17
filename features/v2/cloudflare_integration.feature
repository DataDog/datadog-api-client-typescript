@endpoint(cloudflare-integration) @endpoint(cloudflare-integration-v2)
Feature: Cloudflare Integration
  Manage your Datadog Cloudflare integration directly through the Datadog
  API. See the [Cloudflare integration
  page](https://docs.datadoghq.com/integrations/cloudflare/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CloudflareIntegration" API

  @generated @skip
  Scenario: Add Cloudflare account returns "Bad Request" response
    Given new "CreateCloudflareAccount" request
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "name": "test-name", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add Cloudflare account returns "CREATED" response
    Given new "CreateCloudflareAccount" request
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "name": "test-name", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Add Cloudflare account returns "Not Found" response
    Given new "CreateCloudflareAccount" request
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "name": "test-name", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Cloudflare account returns "Bad Request" response
    Given new "DeleteCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Cloudflare account returns "Not Found" response
    Given new "DeleteCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Cloudflare account returns "OK" response
    Given new "DeleteCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get Cloudflare account returns "Bad Request" response
    Given new "GetCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Cloudflare account returns "Not Found" response
    Given new "GetCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Cloudflare account returns "OK" response
    Given new "GetCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Cloudflare accounts returns "Bad Request" response
    Given new "ListCloudflareAccounts" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Cloudflare accounts returns "Not Found" response
    Given new "ListCloudflareAccounts" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List Cloudflare accounts returns "OK" response
    Given new "ListCloudflareAccounts" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Cloudflare account returns "Bad Request" response
    Given new "UpdateCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Cloudflare account returns "Not Found" response
    Given new "UpdateCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Cloudflare account returns "OK" response
    Given new "UpdateCloudflareAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3", "email": "test-email@example.com", "resources": ["web", "dns", "lb", "worker"], "zones": ["zone_id_1", "zone_id_2"]}, "type": "cloudflare-accounts"}}
    When the request is sent
    Then the response status is 200 OK
