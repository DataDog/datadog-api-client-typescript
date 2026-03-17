@endpoint(logs) @endpoint(logs-v1)
Feature: Logs
  Search your logs and send them to your Datadog platform over HTTP. See the
  [Log Management page](https://docs.datadoghq.com/logs/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And an instance of "Logs" API

  @generated @skip
  Scenario: Search logs returns "Bad Request" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogs" request
    And body with value {"index": "retention-3,retention-15", "query": "service:web* AND @http.status_code:[200 TO 299]", "sort": "asc", "time": {"from": "2020-02-02T02:02:02.202Z", "to": "2020-02-20T02:02:02.202Z"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search logs returns "OK" response
    Given a valid "appKeyAuth" key in the system
    And new "ListLogs" request
    And body with value {"index": "retention-3,retention-15", "query": "service:web* AND @http.status_code:[200 TO 299]", "sort": "asc", "time": {"from": "2020-02-02T02:02:02.202Z", "to": "2020-02-20T02:02:02.202Z"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Send logs returns "Response from server (always 200 empty JSON)." response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 200 Response from server (always 200 empty JSON).

  @generated @skip
  Scenario: Send logs returns "unexpected error" response
    Given new "SubmitLog" request
    And body with value [{"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}]
    When the request is sent
    Then the response status is 400 unexpected error
