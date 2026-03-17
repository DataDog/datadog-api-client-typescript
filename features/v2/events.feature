@endpoint(events) @endpoint(events-v2)
Feature: Events
  The Event Management API allows you to programmatically post events to the
  Events Explorer and fetch events from the Events Explorer. See the [Event
  Management page](https://docs.datadoghq.com/service_management/events/)
  for more information.  **Update to Datadog monitor events
  `aggregation_key` starting March 1, 2025:** The Datadog monitor events
  `aggregation_key` is unique to each Monitor ID. Starting March 1st, this
  key will also include Monitor Group, making it unique per *Monitor ID and
  Monitor Group*. If you're using monitor events `aggregation_key` in
  dashboard queries or the Event API, you must migrate to use `@monitor.id`.
  Reach out to [support](https://www.datadoghq.com/support/) if you have any
  question.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Events" API

  @generated @skip
  Scenario: Get a list of events returns "Bad Request" response
    Given new "ListEvents" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of events returns "OK" response
    Given new "ListEvents" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of events returns "OK" response with pagination
    Given new "ListEvents" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an event returns "Bad Request" response
    Given new "GetEvent" request
    And request contains "event_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an event returns "Not Found" response
    Given new "GetEvent" request
    And request contains "event_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an event returns "OK" response
    Given new "GetEvent" request
    And request contains "event_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Post an event returns "Bad request" response
    Given new "CreateEvent" request
    And body with value {"data": {"attributes": {"aggregation_key": "aggregation_key_123", "attributes": {"author": {"name": "example@datadog.com", "type": "user"}, "change_metadata": {"dd": {"team": "datadog_team", "user_email": "datadog@datadog.com", "user_id": "datadog_user_id", "user_name": "datadog_username"}, "resource_link": "datadog.com/feature/fallback_payments_test"}, "changed_resource": {"name": "fallback_payments_test", "type": "feature_flag"}, "impacted_resources": [{"name": "payments_api", "type": "service"}], "new_value": {"enabled": true, "percentage": "50%", "rule": {"datacenter": "devcycle.us1.prod"}}, "prev_value": {"enabled": true, "percentage": "10%", "rule": {"datacenter": "devcycle.us1.prod"}}}, "category": "change", "host": "hostname", "integration_id": "custom-events", "message": "payment_processed feature flag has been enabled", "tags": ["env:api_client_test"], "title": "payment_processed feature flag updated"}, "type": "event"}}
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Post an event returns "OK" response
    Given new "CreateEvent" request
    And body with value {"data": {"attributes": {"aggregation_key": "aggregation_key_123", "attributes": {"author": {"name": "example@datadog.com", "type": "user"}, "change_metadata": {"dd": {"team": "datadog_team", "user_email": "datadog@datadog.com", "user_id": "datadog_user_id", "user_name": "datadog_username"}, "resource_link": "datadog.com/feature/fallback_payments_test"}, "changed_resource": {"name": "fallback_payments_test", "type": "feature_flag"}, "impacted_resources": [{"name": "payments_api", "type": "service"}], "new_value": {"enabled": true, "percentage": "50%", "rule": {"datacenter": "devcycle.us1.prod"}}, "prev_value": {"enabled": true, "percentage": "10%", "rule": {"datacenter": "devcycle.us1.prod"}}}, "category": "change", "host": "hostname", "integration_id": "custom-events", "message": "payment_processed feature flag has been enabled", "tags": ["env:api_client_test"], "title": "payment_processed feature flag updated"}, "type": "event"}}
    When the request is sent
    Then the response status is 202 OK

  @generated @skip
  Scenario: Search events returns "Bad Request" response
    Given new "SearchEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "service:web* AND @http.status_code:[200 TO 299]", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search events returns "OK" response
    Given new "SearchEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "service:web* AND @http.status_code:[200 TO 299]", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search events returns "OK" response with pagination
    Given new "SearchEvents" request
    And body with value {"filter": {"from": "now-15m", "query": "service:web* AND @http.status_code:[200 TO 299]", "to": "now"}, "options": {"timezone": "GMT"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK
