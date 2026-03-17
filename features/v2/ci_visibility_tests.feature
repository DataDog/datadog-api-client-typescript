@endpoint(ci-visibility-tests) @endpoint(ci-visibility-tests-v2)
Feature: CI Visibility Tests
  Search or aggregate your CI Visibility test events over HTTP. See the
  [Test Visibility in Datadog page](https://docs.datadoghq.com/tests/) for
  more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CIVisibilityTests" API

  @generated @skip
  Scenario: Aggregate tests events returns "Bad Request" response
    Given new "AggregateCIAppTestEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@test.service:web-ui-tests AND @test.status:fail", "to": "now"}, "group_by": [{"facet": "@test.service", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Aggregate tests events returns "OK" response
    Given new "AggregateCIAppTestEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@test.service:web-ui-tests AND @test.status:fail", "to": "now"}, "group_by": [{"facet": "@test.service", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of tests events returns "Bad Request" response
    Given new "ListCIAppTestEvents" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of tests events returns "OK" response
    Given new "ListCIAppTestEvents" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of tests events returns "OK" response with pagination
    Given new "ListCIAppTestEvents" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search tests events returns "Bad Request" response
    Given new "SearchCIAppTestEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@test.service:web-ui-tests AND @test.status:fail", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search tests events returns "OK" response
    Given new "SearchCIAppTestEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@test.service:web-ui-tests AND @test.status:fail", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search tests events returns "OK" response with pagination
    Given new "SearchCIAppTestEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@test.service:web-ui-tests AND @test.status:fail", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK
