@endpoint(audit) @endpoint(audit-v2)
Feature: Audit
  Search your Audit Logs events over HTTP.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Audit" API

  @generated @skip
  Scenario: Get a list of Audit Logs events returns "Bad Request" response
    Given new "ListAuditLogs" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of Audit Logs events returns "OK" response
    Given new "ListAuditLogs" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of Audit Logs events returns "OK" response with pagination
    Given new "ListAuditLogs" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search Audit Logs events returns "Bad Request" response
    Given new "SearchAuditLogs" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search Audit Logs events returns "OK" response
    Given new "SearchAuditLogs" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search Audit Logs events returns "OK" response with pagination
    Given new "SearchAuditLogs" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK
