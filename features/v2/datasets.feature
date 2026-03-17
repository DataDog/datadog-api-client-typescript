@endpoint(datasets) @endpoint(datasets-v2)
Feature: Datasets
  Data Access Controls in Datadog is a feature that allows administrators
  and access managers to regulate access to sensitive data. By defining
  Restricted Datasets, you can ensure that only specific teams or roles can
  view certain types of telemetry (for example, logs, traces, metrics, and
  RUM data).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Datasets" API

  @generated @skip
  Scenario: Create a dataset returns "Bad Request" response
    Given operation "CreateDataset" enabled
    And new "CreateDataset" request
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a dataset returns "Conflict" response
    Given operation "CreateDataset" enabled
    And new "CreateDataset" request
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a dataset returns "OK" response
    Given operation "CreateDataset" enabled
    And new "CreateDataset" request
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a dataset returns "Bad Request" response
    Given operation "DeleteDataset" enabled
    And new "DeleteDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a dataset returns "No Content" response
    Given operation "DeleteDataset" enabled
    And new "DeleteDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete a dataset returns "Not Found" response
    Given operation "DeleteDataset" enabled
    And new "DeleteDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit a dataset returns "Bad Request" response
    Given operation "UpdateDataset" enabled
    And new "UpdateDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit a dataset returns "Not Found" response
    Given operation "UpdateDataset" enabled
    And new "UpdateDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit a dataset returns "OK" response
    Given operation "UpdateDataset" enabled
    And new "UpdateDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Security Audit Dataset", "principals": ["role:94172442-be03-11e9-a77a-3b7612558ac1"], "product_filters": [{"filters": ["@application.id:ABCD"], "product": "logs"}]}, "type": "dataset"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a single dataset by ID returns "Bad Request" response
    Given operation "GetDataset" enabled
    And new "GetDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a single dataset by ID returns "Not Found" response
    Given operation "GetDataset" enabled
    And new "GetDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a single dataset by ID returns "OK" response
    Given operation "GetDataset" enabled
    And new "GetDataset" request
    And request contains "dataset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all datasets returns "OK" response
    Given operation "GetAllDatasets" enabled
    And new "GetAllDatasets" request
    When the request is sent
    Then the response status is 200 OK
