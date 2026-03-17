@endpoint(logs) @endpoint(logs-v2)
Feature: Logs
  Search your logs and send them to your Datadog platform over HTTP. See the
  [Log Management page](https://docs.datadoghq.com/logs/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And an instance of "Logs" API

  @generated @skip
  Scenario: Aggregate events returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "AggregateLogs" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "indexes": ["main", "web"], "query": "service:web* AND @http.status_code:[200 TO 299]", "storage_tier": "indexes", "to": "now"}, "group_by": [{"facet": "host", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ=="}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Aggregate events returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "AggregateLogs" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "indexes": ["main", "web"], "query": "service:web* AND @http.status_code:[200 TO 299]", "storage_tier": "indexes", "to": "now"}, "group_by": [{"facet": "host", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ=="}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search logs (GET) returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogsGet" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search logs (GET) returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogsGet" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search logs (GET) returns "OK" response with pagination
    Given a valid "appKeyAuth" key in the system
    And new "ListLogsGet" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search logs (POST) returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogs" request
    And body with value {"filter": {"from": "now-15m", "indexes": ["main", "web"], "query": "service:web* AND @http.status_code:[200 TO 299]", "storage_tier": "indexes", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search logs (POST) returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogs" request
    And body with value {"filter": {"from": "now-15m", "indexes": ["main", "web"], "query": "service:web* AND @http.status_code:[200 TO 299]", "storage_tier": "indexes", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search logs (POST) returns "OK" response with pagination
    Given a valid "appKeyAuth" key in the system
    And new "ListLogs" request
    And body with value {"filter": {"from": "now-15m", "indexes": ["main", "web"], "query": "service:web* AND @http.status_code:[200 TO 299]", "storage_tier": "indexes", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Send logs returns "Bad Request" response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Send logs returns "Payload Too Large" response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 413 Payload Too Large

  @generated @skip
  Scenario: Send logs returns "Request Timeout" response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 408 Request Timeout

  @generated @skip
  Scenario: Send logs returns "Request accepted for processing (always 202 empty JSON)." response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 202 Request accepted for processing (always 202 empty JSON).
