@endpoint(organizations) @endpoint(organizations-v2)
Feature: Organizations
  Create, edit, and manage your organizations. Read more about [multi-org ac
  counts](https://docs.datadoghq.com/account_management/multi_organization).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Organizations" API

  @generated @skip
  Scenario: Get a specific Org Config value returns "Bad Request" response
    Given new "GetOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a specific Org Config value returns "Not Found" response
    Given new "GetOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a specific Org Config value returns "OK" response
    Given new "GetOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Org Configs returns "Bad Request" response
    Given new "ListOrgConfigs" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Org Configs returns "OK" response
    Given new "ListOrgConfigs" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a specific Org Config returns "Bad Request" response
    Given new "UpdateOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "org_configs"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a specific Org Config returns "Not Found" response
    Given new "UpdateOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "org_configs"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a specific Org Config returns "OK" response
    Given new "UpdateOrgConfig" request
    And request contains "org_config_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "org_configs"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Upload IdP metadata returns "Bad Request" response
    Given new "UploadIdPMetadata" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Upload IdP metadata returns "OK" response
    Given new "UploadIdPMetadata" request
    When the request is sent
    Then the response status is 200 OK
