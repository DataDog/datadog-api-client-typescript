@endpoint(rum-retention-filters-exclusion) @endpoint(rum-retention-filters-exclusion-v2)
Feature: RUM Retention Filters Exclusion
  Manage exclusion filters through [Manage
  Applications](https://app.datadoghq.com/rum/list) in RUM. Exclusion
  filters, including the built-in Error Tracking exclusion filter, control
  which RUM events are excluded from retention.
  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "RumRetentionFilters" API

  @generated @skip @team:DataDog/rum-backend
  Scenario: Create a RUM exclusion filter returns "Bad Request" response
    Given new "CreateExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "event_type": "error", "name": "Exclude noisy browser extension errors", "query": "@error.message:*extension*"}, "type": "invalid_type"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/rum-backend
  Scenario: Create a RUM exclusion filter returns "Created" response
    Given new "CreateExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "event_type": "error", "name": "Exclude noisy browser extension errors", "query": "@error.message:*extension*"}, "type": "exclusion_filters"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip @team:DataDog/rum-backend
  Scenario: Delete a RUM exclusion filter returns "Method Not Allowed" response
    Given new "DeleteExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 405 Method Not Allowed

  @generated @skip @team:DataDog/rum-backend
  Scenario: Delete a RUM exclusion filter returns "No Content" response
    Given new "DeleteExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip @team:DataDog/rum-backend
  Scenario: Delete a RUM exclusion filter returns "Not Found" response
    Given new "DeleteExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/rum-backend
  Scenario: Get a RUM exclusion filter returns "Not Found" response
    Given new "GetExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/rum-backend
  Scenario: Get a RUM exclusion filter returns "OK" response
    Given new "GetExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/rum-backend
  Scenario: Get all RUM exclusion filters returns "OK" response
    Given new "ListExclusionFilters" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/rum-backend
  Scenario: Update a RUM exclusion filter returns "Bad Request" response
    Given new "UpdateExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": false, "event_type": "error", "name": "Exclude noisy browser extension errors", "query": "@error.message:*extension*"}, "id": "REPLACE.ME", "type": "invalid_type"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/rum-backend
  Scenario: Update a RUM exclusion filter returns "Not Found" response
    Given new "UpdateExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": false, "event_type": "error", "name": "Exclude noisy browser extension errors", "query": "@error.message:*extension*"}, "id": "REPLACE.ME", "type": "exclusion_filters"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/rum-backend
  Scenario: Update a RUM exclusion filter returns "Updated" response
    Given new "UpdateExclusionFilter" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And request contains "ef_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": false, "event_type": "error", "name": "Exclude noisy browser extension errors", "query": "@error.message:*extension*"}, "id": "REPLACE.ME", "type": "exclusion_filters"}}
    When the request is sent
    Then the response status is 200 Updated
