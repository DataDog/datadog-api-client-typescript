@endpoint(okta-integration) @endpoint(okta-integration-v2)
Feature: Okta Integration
  Configure your [Datadog Okta
  integration](https://docs.datadoghq.com/integrations/okta/) directly
  through the Datadog API.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "OktaIntegration" API

  @generated @skip
  Scenario: Add Okta account returns "Bad Request" response
    Given new "CreateOktaAccount" request
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://example.okta.com/", "name": "Okta-Prod"}, "id": "f749daaf-682e-4208-a38d-c9b43162c609", "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add Okta account returns "Not Found" response
    Given new "CreateOktaAccount" request
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://example.okta.com/", "name": "Okta-Prod"}, "id": "f749daaf-682e-4208-a38d-c9b43162c609", "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Add Okta account returns "OK" response
    Given new "CreateOktaAccount" request
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://example.okta.com/", "name": "Okta-Prod"}, "id": "f749daaf-682e-4208-a38d-c9b43162c609", "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete Okta account returns "Bad Request" response
    Given new "DeleteOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Okta account returns "Not Found" response
    Given new "DeleteOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Okta account returns "OK" response
    Given new "DeleteOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get Okta account returns "Bad Request" response
    Given new "GetOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Okta account returns "Not Found" response
    Given new "GetOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Okta account returns "OK" response
    Given new "GetOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Okta accounts returns "Bad Request" response
    Given new "ListOktaAccounts" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Okta accounts returns "Not Found" response
    Given new "ListOktaAccounts" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List Okta accounts returns "OK" response
    Given new "ListOktaAccounts" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Okta account returns "Bad Request" response
    Given new "UpdateOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://dev-test.okta.com/"}, "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Okta account returns "Not Found" response
    Given new "UpdateOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://dev-test.okta.com/"}, "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Okta account returns "OK" response
    Given new "UpdateOktaAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"auth_method": "oauth", "domain": "https://dev-test.okta.com/"}, "type": "okta-accounts"}}
    When the request is sent
    Then the response status is 200 OK
