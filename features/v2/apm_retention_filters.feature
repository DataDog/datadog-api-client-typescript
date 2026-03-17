@endpoint(apm-retention-filters) @endpoint(apm-retention-filters-v2)
Feature: APM Retention Filters
  Manage configuration of [APM retention
  filters](https://app.datadoghq.com/apm/traces/retention-filters) for your
  organization. You need an API and application key with Admin rights to
  interact with this endpoint. See [retention filters](https://docs.datadogh
  q.com/tracing/trace_pipeline/trace_retention/#retention-filters) on the
  Trace Retention page for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "APMRetentionFilters" API

  @generated @skip
  Scenario: Create a retention filter returns "Bad Request" response
    Given new "CreateApmRetentionFilter" request
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a retention filter returns "Conflict" response
    Given new "CreateApmRetentionFilter" request
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a retention filter returns "OK" response
    Given new "CreateApmRetentionFilter" request
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a retention filter returns "Not Found" response
    Given new "DeleteApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a retention filter returns "OK" response
    Given new "DeleteApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a given APM retention filter returns "Not Found" response
    Given new "GetApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a given APM retention filter returns "OK" response
    Given new "GetApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List all APM retention filters returns "OK" response
    Given new "ListApmRetentionFilters" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Re-order retention filters returns "Bad Request" response
    Given new "ReorderApmRetentionFilters" request
    And body with value {"data": [{"id": "7RBOb7dLSYWI01yc3pIH8w", "type": "apm_retention_filter"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Re-order retention filters returns "OK" response
    Given new "ReorderApmRetentionFilters" request
    And body with value {"data": [{"id": "7RBOb7dLSYWI01yc3pIH8w", "type": "apm_retention_filter"}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a retention filter returns "Bad Request" response
    Given new "UpdateApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "id": "retention-filter-id", "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a retention filter returns "Not Found" response
    Given new "UpdateApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "id": "retention-filter-id", "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a retention filter returns "OK" response
    Given new "UpdateApmRetentionFilter" request
    And request contains "filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "filter": {"query": "@http.status_code:200 service:my-service"}, "filter_type": "spans-sampling-processor", "name": "my retention filter", "rate": 1.0, "trace_rate": 1.0}, "id": "retention-filter-id", "type": "apm_retention_filter"}}
    When the request is sent
    Then the response status is 200 OK
