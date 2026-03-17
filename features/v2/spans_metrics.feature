@endpoint(spans-metrics) @endpoint(spans-metrics-v2)
Feature: Spans Metrics
  Manage configuration of [span-based
  metrics](https://app.datadoghq.com/apm/traces/generate-metrics) for your
  organization. See [Generate Metrics from Spans](https://docs.datadoghq.com
  /tracing/trace_pipeline/generate_metrics/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "SpansMetrics" API

  @generated @skip
  Scenario: Create a span-based metric returns "Bad Request" response
    Given new "CreateSpansMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": false, "path": "@duration"}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "id": "my.metric", "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a span-based metric returns "Conflict" response
    Given new "CreateSpansMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": false, "path": "@duration"}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "id": "my.metric", "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a span-based metric returns "OK" response
    Given new "CreateSpansMetric" request
    And body with value {"data": {"attributes": {"compute": {"aggregation_type": "distribution", "include_percentiles": false, "path": "@duration"}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "id": "my.metric", "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a span-based metric returns "Not Found" response
    Given new "DeleteSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a span-based metric returns "OK" response
    Given new "DeleteSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a span-based metric returns "Not Found" response
    Given new "GetSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a span-based metric returns "OK" response
    Given new "GetSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all span-based metrics returns "OK" response
    Given new "ListSpansMetrics" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a span-based metric returns "Bad Request" response
    Given new "UpdateSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": false}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a span-based metric returns "Not Found" response
    Given new "UpdateSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": false}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a span-based metric returns "OK" response
    Given new "UpdateSpansMetric" request
    And request contains "metric_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"compute": {"include_percentiles": false}, "filter": {"query": "@http.status_code:200 service:my-service"}, "group_by": [{"path": "resource_name", "tag_name": "resource_name"}]}, "type": "spans_metrics"}}
    When the request is sent
    Then the response status is 200 OK
