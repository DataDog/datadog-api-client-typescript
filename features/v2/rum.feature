@endpoint(rum) @endpoint(rum-v2)
Feature: RUM
  Manage your Real User Monitoring (RUM) applications, and search or
  aggregate your RUM events over HTTP. See the [RUM & Session Replay
  page](https://docs.datadoghq.com/real_user_monitoring/) for more
  information

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "RUM" API

  @generated @skip
  Scenario: Aggregate RUM events returns "Bad Request" response
    Given new "AggregateRUMEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "group_by": [{"facet": "@view.time_spent", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Aggregate RUM events returns "OK" response
    Given new "AggregateRUMEvents" request
    And body with value {"compute": [{"aggregation": "pc90", "interval": "5m", "metric": "@duration", "type": "total"}], "filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "group_by": [{"facet": "@view.time_spent", "histogram": {"interval": 10, "max": 100, "min": 50}, "limit": 10, "sort": {"aggregation": "count", "order": "asc"}, "total": false}], "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a new RUM application returns "Bad Request" response
    Given new "CreateRUMApplication" request
    And body with value {"data": {"attributes": {"name": "my_new_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "type": "rum_application_create"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new RUM application returns "OK" response
    Given new "CreateRUMApplication" request
    And body with value {"data": {"attributes": {"name": "my_new_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "type": "rum_application_create"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a RUM application returns "No Content" response
    Given new "DeleteRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete a RUM application returns "Not Found" response
    Given new "DeleteRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a RUM application returns "Not Found" response
    Given new "GetRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a RUM application returns "OK" response
    Given new "GetRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of RUM events returns "Bad Request" response
    Given new "ListRUMEvents" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of RUM events returns "OK" response
    Given new "ListRUMEvents" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of RUM events returns "OK" response with pagination
    Given new "ListRUMEvents" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List all the RUM applications returns "Not Found" response
    Given new "GetRUMApplications" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List all the RUM applications returns "OK" response
    Given new "GetRUMApplications" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search RUM events returns "Bad Request" response
    Given new "SearchRUMEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search RUM events returns "OK" response
    Given new "SearchRUMEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search RUM events returns "OK" response with pagination
    Given new "SearchRUMEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "@type:session AND @session.type:user", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a RUM application returns "Bad Request" response
    Given new "UpdateRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "updated_name_for_my_existing_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "id": "abcd1234-0000-0000-abcd-1234abcd5678", "type": "rum_application_update"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a RUM application returns "Not Found" response
    Given new "UpdateRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "updated_name_for_my_existing_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "id": "abcd1234-0000-0000-abcd-1234abcd5678", "type": "rum_application_update"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a RUM application returns "OK" response
    Given new "UpdateRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "updated_name_for_my_existing_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "id": "abcd1234-0000-0000-abcd-1234abcd5678", "type": "rum_application_update"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a RUM application returns "Unprocessable Entity." response
    Given new "UpdateRUMApplication" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "updated_name_for_my_existing_rum_application", "product_analytics_retention_state": "MAX", "rum_event_processing_state": "ALL", "type": "browser"}, "id": "abcd1234-0000-0000-abcd-1234abcd5678", "type": "rum_application_update"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity.
