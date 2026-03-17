@endpoint(metrics) @endpoint(metrics-v2)
Feature: Metrics
  The metrics endpoint allows you to:  - Post metrics data so it can be
  graphed on Datadog’s dashboards - Query metrics from any time period
  (timeseries and scalar) - Modify tag configurations for metrics - View
  tags and volumes for metrics  **Note**: A graph can only contain a set
  number of points and as the timeframe over which a metric is viewed
  increases, aggregation between points occurs to stay below that set
  number.  The Post, Patch, and Delete `manage_tags` API methods can only be
  performed by a user who has the `Manage Tags for Metrics` permission.  See
  the [Metrics page](https://docs.datadoghq.com/metrics/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And an instance of "Metrics" API

  @generated @skip
  Scenario: Configure tags for multiple metrics returns "Accepted" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"], "tags": ["host", "pod_name", "is_shadow"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Configure tags for multiple metrics returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"], "tags": ["host", "pod_name", "is_shadow"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Configure tags for multiple metrics returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"], "tags": ["host", "pod_name", "is_shadow"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create a tag configuration returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"include_percentiles": false, "metric_type": "distribution", "tags": ["app", "datacenter"]}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a tag configuration returns "Conflict" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"include_percentiles": false, "metric_type": "distribution", "tags": ["app", "datacenter"]}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a tag configuration returns "Created" response
    Given a valid "appKeyAuth" key in the system
    And new "CreateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"include_percentiles": false, "metric_type": "distribution", "tags": ["app", "datacenter"]}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete a tag configuration returns "No Content" response
    Given a valid "appKeyAuth" key in the system
    And new "DeleteTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete a tag configuration returns "Not found" response
    Given a valid "appKeyAuth" key in the system
    And new "DeleteTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete tags for multiple metrics returns "Accepted" response
    Given a valid "appKeyAuth" key in the system
    And new "DeleteBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Delete tags for multiple metrics returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "DeleteBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete tags for multiple metrics returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "DeleteBulkTagsMetricsConfiguration" request
    And body with value {"data": {"attributes": {"emails": ["sue@example.com", "bob@example.com"]}, "id": "kafka.lag", "type": "metric_bulk_configure_tags"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a list of metrics returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagConfigurations" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of metrics returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagConfigurations" request
    When the request is sent
    Then the response status is 200 Success

  @generated @skip @with-pagination
  Scenario: Get a list of metrics returns "Success" response with pagination
    Given a valid "appKeyAuth" key in the system
    And new "ListTagConfigurations" request
    When the request with pagination is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: Get tag key cardinality details returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "GetMetricTagCardinalityDetails" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get tag key cardinality details returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "GetMetricTagCardinalityDetails" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get tag key cardinality details returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "GetMetricTagCardinalityDetails" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: List active tags and aggregations returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListActiveMetricConfigurations" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List active tags and aggregations returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "ListActiveMetricConfigurations" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List active tags and aggregations returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListActiveMetricConfigurations" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: List distinct metric volumes by metric name returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListVolumesByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List distinct metric volumes by metric name returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "ListVolumesByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List distinct metric volumes by metric name returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListVolumesByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: List tag configuration by name returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagConfigurationByName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List tag configuration by name returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagConfigurationByName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: List tags by metric name returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagsByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List tags by metric name returns "Not Found" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagsByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List tags by metric name returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListTagsByMetricName" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: Query scalar data across multiple products returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "QueryScalarData" request
    And body with value {"data": {"attributes": {"formulas": [{"formula": "a+b", "limit": {"count": 10, "order": "desc"}}], "from": 1568899800000, "queries": [{"aggregator": "avg", "data_source": "metrics", "query": "avg:system.cpu.user{*} by {env}"}], "to": 1568923200000}, "type": "scalar_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Query scalar data across multiple products returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "QueryScalarData" request
    And body with value {"data": {"attributes": {"formulas": [{"formula": "a+b", "limit": {"count": 10, "order": "desc"}}], "from": 1568899800000, "queries": [{"aggregator": "avg", "data_source": "metrics", "query": "avg:system.cpu.user{*} by {env}"}], "to": 1568923200000}, "type": "scalar_request"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Query timeseries data across multiple products returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "QueryTimeseriesData" request
    And body with value {"data": {"attributes": {"formulas": [{"formula": "a+b", "limit": {"count": 10, "order": "desc"}}], "from": 1568899800000, "interval": 5000, "queries": [{"data_source": "metrics", "query": "avg:system.cpu.user{*} by {env}"}], "to": 1568923200000}, "type": "timeseries_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Query timeseries data across multiple products returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "QueryTimeseriesData" request
    And body with value {"data": {"attributes": {"formulas": [{"formula": "a+b", "limit": {"count": 10, "order": "desc"}}], "from": 1568899800000, "interval": 5000, "queries": [{"data_source": "metrics", "query": "avg:system.cpu.user{*} by {env}"}], "to": 1568923200000}, "type": "timeseries_request"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Related Assets to a Metric returns "API error response." response
    Given a valid "appKeyAuth" key in the system
    And new "ListMetricAssets" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 API error response.

  @generated @skip
  Scenario: Related Assets to a Metric returns "API error response." response
    Given a valid "appKeyAuth" key in the system
    And new "ListMetricAssets" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Related Assets to a Metric returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "ListMetricAssets" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: Submit metrics returns "Bad Request" response
    Given new "SubmitMetrics" request
    And body with value {"series": [{"metric": "system.load.1", "points": [{"timestamp": 1475317847, "value": 0.7}], "resources": [{"name": "dummyhost", "type": "host"}]}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Submit metrics returns "Payload accepted" response
    Given new "SubmitMetrics" request
    And body with value {"series": [{"metric": "system.load.1", "points": [{"timestamp": 1475317847, "value": 0.7}], "resources": [{"name": "dummyhost", "type": "host"}]}]}
    When the request is sent
    Then the response status is 202 Payload accepted

  @generated @skip
  Scenario: Submit metrics returns "Payload too large" response
    Given new "SubmitMetrics" request
    And body with value {"series": [{"metric": "system.load.1", "points": [{"timestamp": 1475317847, "value": 0.7}], "resources": [{"name": "dummyhost", "type": "host"}]}]}
    When the request is sent
    Then the response status is 413 Payload too large

  @generated @skip
  Scenario: Submit metrics returns "Request timeout" response
    Given new "SubmitMetrics" request
    And body with value {"series": [{"metric": "system.load.1", "points": [{"timestamp": 1475317847, "value": 0.7}], "resources": [{"name": "dummyhost", "type": "host"}]}]}
    When the request is sent
    Then the response status is 408 Request timeout

  @generated @skip
  Scenario: Tag Configuration Cardinality Estimator returns "API error response." response
    Given a valid "appKeyAuth" key in the system
    And new "EstimateMetricsOutputSeries" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 API error response.

  @generated @skip
  Scenario: Tag Configuration Cardinality Estimator returns "API error response." response
    Given a valid "appKeyAuth" key in the system
    And new "EstimateMetricsOutputSeries" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Tag Configuration Cardinality Estimator returns "Success" response
    Given a valid "appKeyAuth" key in the system
    And new "EstimateMetricsOutputSeries" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Success

  @generated @skip
  Scenario: Update a tag configuration returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "UpdateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"group_by": ["app", "datacenter"], "include_percentiles": false}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a tag configuration returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "UpdateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"group_by": ["app", "datacenter"], "include_percentiles": false}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a tag configuration returns "Unprocessable Entity" response
    Given a valid "appKeyAuth" key in the system
    And new "UpdateTagConfiguration" request
    And request contains "metric_name" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"group_by": ["app", "datacenter"], "include_percentiles": false}, "id": "http.endpoint.request", "type": "manage_tags"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity
