@endpoint(ci-visibility-pipelines) @endpoint(ci-visibility-pipelines-v2)
Feature: CI Visibility Pipelines
  Search or aggregate your CI Visibility pipeline events and send them to
  your Datadog site over HTTP. See the [CI Pipeline Visibility in Datadog
  page](https://docs.datadoghq.com/continuous_integration/pipelines/) for
  more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And an instance of "CIVisibilityPipelines" API

  @generated @skip
  Scenario: Aggregate pipelines events returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "AggregateCIAppPipelineEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@ci.provider.name:github AND @ci.status:error", "to": "now"}, "group_by": [{"facet": "@ci.status", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Aggregate pipelines events returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "AggregateCIAppPipelineEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@ci.provider.name:github AND @ci.status:error", "to": "now"}, "group_by": [{"facet": "@ci.status", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of pipelines events returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListCIAppPipelineEvents" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of pipelines events returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "ListCIAppPipelineEvents" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of pipelines events returns "OK" response with pagination
    Given a valid "appKeyAuth" key in the system
    And new "ListCIAppPipelineEvents" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search pipelines events returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "SearchCIAppPipelineEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@ci.provider.name:github AND @ci.status:error", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search pipelines events returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "SearchCIAppPipelineEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@ci.provider.name:github AND @ci.status:error", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search pipelines events returns "OK" response with pagination
    Given a valid "appKeyAuth" key in the system
    And new "SearchCIAppPipelineEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@ci.provider.name:github AND @ci.status:error", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Send pipeline event returns "Bad Request" response
    Given new "CreateCIAppPipelineEvent" request
    And body with value {"data": {"attributes": {"resource": "Details TBD"}, "type": "cipipeline_resource_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Send pipeline event returns "Payload Too Large" response
    Given new "CreateCIAppPipelineEvent" request
    And body with value {"data": {"attributes": {"resource": "Details TBD"}, "type": "cipipeline_resource_request"}}
    When the request is sent
    Then the response status is 413 Payload Too Large

  @generated @skip
  Scenario: Send pipeline event returns "Request Timeout" response
    Given new "CreateCIAppPipelineEvent" request
    And body with value {"data": {"attributes": {"resource": "Details TBD"}, "type": "cipipeline_resource_request"}}
    When the request is sent
    Then the response status is 408 Request Timeout

  @generated @skip
  Scenario: Send pipeline event returns "Request accepted for processing" response
    Given new "CreateCIAppPipelineEvent" request
    And body with value {"data": {"attributes": {"resource": "Details TBD"}, "type": "cipipeline_resource_request"}}
    When the request is sent
    Then the response status is 202 Request accepted for processing
