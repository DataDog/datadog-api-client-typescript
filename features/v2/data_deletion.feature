@endpoint(data-deletion) @endpoint(data-deletion-v2)
Feature: Data Deletion
  The Data Deletion API allows the user to target and delete data from the
  allowed products. It's currently enabled for Logs and RUM and depends on
  `logs_delete_data` and `rum_delete_data` permissions respectively.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "DataDeletion" API

  @generated @skip
  Scenario: Cancels a data deletion request returns "Bad Request" response
    Given operation "CancelDataDeletionRequest" enabled
    And new "CancelDataDeletionRequest" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Cancels a data deletion request returns "OK" response
    Given operation "CancelDataDeletionRequest" enabled
    And new "CancelDataDeletionRequest" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Cancels a data deletion request returns "Precondition failed error" response
    Given operation "CancelDataDeletionRequest" enabled
    And new "CancelDataDeletionRequest" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 412 Precondition failed error

  @generated @skip
  Scenario: Creates a data deletion request returns "Bad Request" response
    Given operation "CreateDataDeletionRequest" enabled
    And new "CreateDataDeletionRequest" request
    And request contains "product" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"from": 1672527600000, "indexes": ["test-index", "test-index-2"], "query": {"host": "abc", "service": "xyz"}, "to": 1704063600000}, "type": "create_deletion_req"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Creates a data deletion request returns "OK" response
    Given operation "CreateDataDeletionRequest" enabled
    And new "CreateDataDeletionRequest" request
    And request contains "product" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"from": 1672527600000, "indexes": ["test-index", "test-index-2"], "query": {"host": "abc", "service": "xyz"}, "to": 1704063600000}, "type": "create_deletion_req"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Creates a data deletion request returns "Precondition failed error" response
    Given operation "CreateDataDeletionRequest" enabled
    And new "CreateDataDeletionRequest" request
    And request contains "product" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"from": 1672527600000, "indexes": ["test-index", "test-index-2"], "query": {"host": "abc", "service": "xyz"}, "to": 1704063600000}, "type": "create_deletion_req"}}
    When the request is sent
    Then the response status is 412 Precondition failed error

  @generated @skip
  Scenario: Gets a list of data deletion requests returns "Bad Request" response
    Given operation "GetDataDeletionRequests" enabled
    And new "GetDataDeletionRequests" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Gets a list of data deletion requests returns "OK" response
    Given operation "GetDataDeletionRequests" enabled
    And new "GetDataDeletionRequests" request
    When the request is sent
    Then the response status is 200 OK
