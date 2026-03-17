@endpoint(error-tracking) @endpoint(error-tracking-v2)
Feature: Error Tracking
  View and manage issues within Error Tracking. See the [Error Tracking
  page](https://docs.datadoghq.com/error_tracking/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ErrorTracking" API

  @generated @skip
  Scenario: Get the details of an error tracking issue returns "Bad Request" response
    Given new "GetIssue" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get the details of an error tracking issue returns "Not Found" response
    Given new "GetIssue" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get the details of an error tracking issue returns "OK" response
    Given new "GetIssue" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Remove the assignee of an issue returns "Bad Request" response
    Given new "DeleteIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Remove the assignee of an issue returns "No Content" response
    Given new "DeleteIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove the assignee of an issue returns "Not Found" response
    Given new "DeleteIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Search error tracking issues returns "Bad Request" response
    Given new "SearchIssues" request
    And body with value {"data": {"attributes": {"from": 1671612804000, "order_by": "IMPACTED_SESSIONS", "persona": "BACKEND", "query": "service:orders-* AND @language:go", "to": 1671620004000, "track": "trace"}, "type": "search_request"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search error tracking issues returns "OK" response
    Given new "SearchIssues" request
    And body with value {"data": {"attributes": {"from": 1671612804000, "order_by": "IMPACTED_SESSIONS", "persona": "BACKEND", "query": "service:orders-* AND @language:go", "to": 1671620004000, "track": "trace"}, "type": "search_request"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update the assignee of an issue returns "Bad Request" response
    Given new "UpdateIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "87cb11a0-278c-440a-99fe-701223c80296", "type": "assignee"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update the assignee of an issue returns "Not Found" response
    Given new "UpdateIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "87cb11a0-278c-440a-99fe-701223c80296", "type": "assignee"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update the assignee of an issue returns "OK" response
    Given new "UpdateIssueAssignee" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "87cb11a0-278c-440a-99fe-701223c80296", "type": "assignee"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update the state of an issue returns "Bad Request" response
    Given new "UpdateIssueState" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"state": "RESOLVED"}, "id": "c1726a66-1f64-11ee-b338-da7ad0900002", "type": "error_tracking_issue"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update the state of an issue returns "Not Found" response
    Given new "UpdateIssueState" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"state": "RESOLVED"}, "id": "c1726a66-1f64-11ee-b338-da7ad0900002", "type": "error_tracking_issue"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update the state of an issue returns "OK" response
    Given new "UpdateIssueState" request
    And request contains "issue_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"state": "RESOLVED"}, "id": "c1726a66-1f64-11ee-b338-da7ad0900002", "type": "error_tracking_issue"}}
    When the request is sent
    Then the response status is 200 OK
