@endpoint(rum-retention-filters) @endpoint(rum-retention-filters-v2)
Feature: Rum Retention Filters
  Manage retention filters through [Manage
  Applications](https://app.datadoghq.com/rum/list) of RUM for your
  organization.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "RumRetentionFilters" API

  @generated @skip
  Scenario: Create a RUM retention filter returns "Bad Request" response
    Given new "CreateRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"cross_product_sampling": {"trace_enabled": true, "trace_sample_rate": 25.0}, "enabled": true, "event_type": "session", "name": "Retention filter for session", "query": "@session.has_replay:true", "sample_rate": 50.5}, "type": "retention_filters"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a RUM retention filter returns "Created" response
    Given new "CreateRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"cross_product_sampling": {"trace_enabled": true, "trace_sample_rate": 25.0}, "enabled": true, "event_type": "session", "name": "Retention filter for session", "query": "@session.has_replay:true", "sample_rate": 50.5}, "type": "retention_filters"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete a RUM retention filter returns "No Content" response
    Given new "DeleteRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete a RUM retention filter returns "Not Found" response
    Given new "DeleteRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a RUM retention filter returns "Not Found" response
    Given new "GetRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a RUM retention filter returns "OK" response
    Given new "GetRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all RUM retention filters returns "OK" response
    Given new "ListRetentionFilters" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Order RUM retention filters returns "Bad Request" response
    Given new "OrderRetentionFilters" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": [{"id": "051601eb-54a0-abc0-03f9-cc02efa18892", "type": "retention_filters"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Order RUM retention filters returns "Ordered" response
    Given new "OrderRetentionFilters" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": [{"id": "051601eb-54a0-abc0-03f9-cc02efa18892", "type": "retention_filters"}]}
    When the request is sent
    Then the response status is 200 Ordered

  @generated @skip
  Scenario: Update a RUM retention filter returns "Bad Request" response
    Given new "UpdateRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"cross_product_sampling": {"trace_enabled": true, "trace_sample_rate": 25.0}, "enabled": true, "event_type": "session", "name": "Retention filter for session", "query": "@session.has_replay:true", "sample_rate": 50.5}, "id": "051601eb-54a0-abc0-03f9-cc02efa18892", "type": "retention_filters"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a RUM retention filter returns "Not Found" response
    Given new "UpdateRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"cross_product_sampling": {"trace_enabled": true, "trace_sample_rate": 25.0}, "enabled": true, "event_type": "session", "name": "Retention filter for session", "query": "@session.has_replay:true", "sample_rate": 50.5}, "id": "051601eb-54a0-abc0-03f9-cc02efa18892", "type": "retention_filters"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a RUM retention filter returns "Updated" response
    Given new "UpdateRetentionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "rf_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"cross_product_sampling": {"trace_enabled": true, "trace_sample_rate": 25.0}, "enabled": true, "event_type": "session", "name": "Retention filter for session", "query": "@session.has_replay:true", "sample_rate": 50.5}, "id": "051601eb-54a0-abc0-03f9-cc02efa18892", "type": "retention_filters"}}
    When the request is sent
    Then the response status is 200 Updated
