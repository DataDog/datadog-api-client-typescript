@endpoint(rum-metrics) @endpoint(rum-metrics-v2)
Feature: Rum Metrics
  Manage configuration of [rum-based
  metrics](https://app.datadoghq.com/rum/generate-metrics) for your
  organization.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "RumMetrics" API

  @generated @skip
  Scenario: Create a rum-based metric returns "Bad Request" response
    Given new "CreateRumMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": true, "path": "@duration"}, "event_type": "session", "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}], "uniqueness": {"when": "match"}}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a rum-based metric returns "Conflict" response
    Given new "CreateRumMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": true, "path": "@duration"}, "event_type": "session", "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}], "uniqueness": {"when": "match"}}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a rum-based metric returns "Created" response
    Given new "CreateRumMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": true, "path": "@duration"}, "event_type": "session", "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}], "uniqueness": {"when": "match"}}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete a rum-based metric returns "No Content" response
    Given new "DeleteRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete a rum-based metric returns "Not Found" response
    Given new "DeleteRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a rum-based metric returns "Not Found" response
    Given new "GetRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a rum-based metric returns "OK" response
    Given new "GetRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all rum-based metrics returns "OK" response
    Given new "ListRumMetrics" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a rum-based metric returns "Bad Request" response
    Given new "UpdateRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": true}, "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}]}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a rum-based metric returns "Conflict" response
    Given new "UpdateRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": true}, "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}]}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update a rum-based metric returns "Not Found" response
    Given new "UpdateRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": true}, "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}]}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a rum-based metric returns "OK" response
    Given new "UpdateRumMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": true}, "filter": {"query": "@service:web-ui:"}, "group_by": [{"path": "@browser.name", "tag_name": "browser_name"}]}, "id": "rum.sessions.webui.count", "type": "rum_metrics"}}
    When the request is sent
    Then the response status is 200 OK
