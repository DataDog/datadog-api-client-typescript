@endpoint(actions-datastores) @endpoint(actions-datastores-v2)
Feature: Actions Datastores
  Leverage the Actions Datastore API to create, modify, and delete items in
  datastores owned by your organization.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ActionsDatastores" API

  @generated @skip
  Scenario: Bulk delete datastore items returns "Bad Request" response
    Given new "BulkDeleteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_keys": []}, "type": "items"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Bulk delete datastore items returns "Not Found" response
    Given new "BulkDeleteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_keys": []}, "type": "items"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Bulk delete datastore items returns "OK" response
    Given new "BulkDeleteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_keys": []}, "type": "items"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Bulk write datastore items returns "Bad Request" response
    Given new "BulkWriteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conflict_mode": "overwrite_on_conflict", "values": [{"data": "example data", "key": "value"}, {"data": "example data2", "key": "value2"}]}, "type": "items"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Bulk write datastore items returns "Not Found" response
    Given new "BulkWriteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conflict_mode": "overwrite_on_conflict", "values": [{"data": "example data", "key": "value"}, {"data": "example data2", "key": "value2"}]}, "type": "items"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Bulk write datastore items returns "OK" response
    Given new "BulkWriteDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conflict_mode": "overwrite_on_conflict", "values": [{"data": "example data", "key": "value"}, {"data": "example data2", "key": "value2"}]}, "type": "items"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create datastore returns "Bad Request" response
    Given new "CreateDatastore" request
    And body with value {"data": {"attributes": {"name": "datastore-name", "org_access": "contributor", "primary_column_name": "", "primary_key_generation_strategy": "none"}, "type": "datastores"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create datastore returns "OK" response
    Given new "CreateDatastore" request
    And body with value {"data": {"attributes": {"name": "datastore-name", "org_access": "contributor", "primary_column_name": "", "primary_key_generation_strategy": "none"}, "type": "datastores"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete datastore item returns "Bad Request" response
    Given new "DeleteDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"id": "a7656bcc-51d4-4884-adf7-4d0d9a3e0633", "item_key": "primaryKey"}, "type": "items"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete datastore item returns "Not Found" response
    Given new "DeleteDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"id": "a7656bcc-51d4-4884-adf7-4d0d9a3e0633", "item_key": "primaryKey"}, "type": "items"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete datastore item returns "OK" response
    Given new "DeleteDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"id": "a7656bcc-51d4-4884-adf7-4d0d9a3e0633", "item_key": "primaryKey"}, "type": "items"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete datastore returns "Bad Request" response
    Given new "DeleteDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete datastore returns "OK" response
    Given new "DeleteDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get datastore returns "Bad Request" response
    Given new "GetDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get datastore returns "Not Found" response
    Given new "GetDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get datastore returns "OK" response
    Given new "GetDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List datastore items returns "Bad Request" response
    Given new "ListDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List datastore items returns "Not Found" response
    Given new "ListDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List datastore items returns "OK" response
    Given new "ListDatastoreItems" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List datastores returns "OK" response
    Given new "ListDatastores" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update datastore item returns "Bad Request" response
    Given new "UpdateDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_changes": {}, "item_key": ""}, "type": "items"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update datastore item returns "Not Found" response
    Given new "UpdateDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_changes": {}, "item_key": ""}, "type": "items"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update datastore item returns "OK" response
    Given new "UpdateDatastoreItem" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"item_changes": {}, "item_key": ""}, "type": "items"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update datastore returns "Bad Request" response
    Given new "UpdateDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "datastores"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update datastore returns "Not Found" response
    Given new "UpdateDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "datastores"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update datastore returns "OK" response
    Given new "UpdateDatastore" request
    And request contains "datastore_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "datastores"}}
    When the request is sent
    Then the response status is 200 OK
