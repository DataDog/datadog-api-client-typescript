@endpoint(confluent-cloud) @endpoint(confluent-cloud-v2)
Feature: Confluent Cloud
  Manage your Datadog Confluent Cloud integration accounts and account
  resources directly through the Datadog API. See the [Confluent Cloud
  page](https://docs.datadoghq.com/integrations/confluent_cloud/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ConfluentCloud" API

  @generated @skip
  Scenario: Add Confluent account returns "Bad Request" response
    Given new "CreateConfluentAccount" request
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "resources": [{"enable_custom_metrics": false, "id": "resource-id-123", "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}], "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add Confluent account returns "Not Found" response
    Given new "CreateConfluentAccount" request
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "resources": [{"enable_custom_metrics": false, "id": "resource-id-123", "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}], "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Add Confluent account returns "OK" response
    Given new "CreateConfluentAccount" request
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "resources": [{"enable_custom_metrics": false, "id": "resource-id-123", "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}], "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Add resource to Confluent account returns "Bad Request" response
    Given new "CreateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add resource to Confluent account returns "Not Found" response
    Given new "CreateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Add resource to Confluent account returns "OK" response
    Given new "CreateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete Confluent account returns "Bad Request" response
    Given new "DeleteConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Confluent account returns "Not Found" response
    Given new "DeleteConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Confluent account returns "OK" response
    Given new "DeleteConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete resource from Confluent account returns "Bad Request" response
    Given new "DeleteConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete resource from Confluent account returns "Not Found" response
    Given new "DeleteConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete resource from Confluent account returns "OK" response
    Given new "DeleteConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get Confluent account returns "Bad Request" response
    Given new "GetConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Confluent account returns "Not Found" response
    Given new "GetConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Confluent account returns "OK" response
    Given new "GetConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get resource from Confluent account returns "Bad Request" response
    Given new "GetConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get resource from Confluent account returns "Not Found" response
    Given new "GetConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get resource from Confluent account returns "OK" response
    Given new "GetConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Confluent Account resources returns "Bad Request" response
    Given new "ListConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Confluent Account resources returns "Not Found" response
    Given new "ListConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List Confluent Account resources returns "OK" response
    Given new "ListConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Confluent accounts returns "Bad Request" response
    Given new "ListConfluentAccount" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Confluent accounts returns "Not Found" response
    Given new "ListConfluentAccount" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List Confluent accounts returns "OK" response
    Given new "ListConfluentAccount" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Confluent account returns "Bad Request" response
    Given new "UpdateConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Confluent account returns "Not Found" response
    Given new "UpdateConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Confluent account returns "OK" response
    Given new "UpdateConfluentAccount" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"api_key": "TESTAPIKEY123", "api_secret": "test-api-secret-123", "tags": ["myTag", "myTag2:myValue"]}, "type": "confluent-cloud-accounts"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update resource in Confluent account returns "Bad Request" response
    Given new "UpdateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update resource in Confluent account returns "Not Found" response
    Given new "UpdateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update resource in Confluent account returns "OK" response
    Given new "UpdateConfluentResource" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And request contains "resource_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enable_custom_metrics": false, "resource_type": "kafka", "tags": ["myTag", "myTag2:myValue"]}, "id": "resource-id-123", "type": "confluent-cloud-resources"}}
    When the request is sent
    Then the response status is 200 OK
