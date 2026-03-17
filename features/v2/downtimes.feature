@endpoint(downtimes) @endpoint(downtimes-v2)
Feature: Downtimes
  **Note**: Downtime V2 is currently in private beta. To request access,
  contact [Datadog support](https://docs.datadoghq.com/help/).
  [Downtiming](https://docs.datadoghq.com/monitors/notify/downtimes) gives
  you greater control over monitor notifications by allowing you to globally
  exclude scopes from alerting. Downtime settings, which can be scheduled
  with start and end times, prevent all alerting related to specified
  Datadog tags.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Downtimes" API

  @generated @skip
  Scenario: Cancel a downtime returns "Downtime not found" response
    Given new "CancelDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Downtime not found

  @generated @skip
  Scenario: Cancel a downtime returns "OK" response
    Given new "CancelDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a downtime returns "Bad Request" response
    Given new "GetDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a downtime returns "Not Found" response
    Given new "GetDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a downtime returns "OK" response
    Given new "GetDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get active downtimes for a monitor returns "Monitor Not Found error" response
    Given new "ListMonitorDowntimes" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Monitor Not Found error

  @generated @skip
  Scenario: Get active downtimes for a monitor returns "OK" response
    Given new "ListMonitorDowntimes" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get active downtimes for a monitor returns "OK" response with pagination
    Given new "ListMonitorDowntimes" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all downtimes returns "OK" response
    Given new "ListDowntimes" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all downtimes returns "OK" response with pagination
    Given new "ListDowntimes" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Schedule a downtime returns "Bad Request" response
    Given new "CreateDowntime" request
    And body with value {"data": {"attributes": {"display_timezone": "America/New_York", "message": "Message about the downtime", "monitor_identifier": {"monitor_id": 123}, "mute_first_recovery_notification": false, "notify_end_states": ["alert", "warn"], "notify_end_types": ["canceled", "expired"], "schedule": {"recurrences": [{"duration": "123d", "rrule": "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1", "start": "2020-01-02T03:04"}], "timezone": "America/New_York"}, "scope": "env:(staging OR prod) AND datacenter:us-east-1"}, "type": "downtime"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Schedule a downtime returns "OK" response
    Given new "CreateDowntime" request
    And body with value {"data": {"attributes": {"display_timezone": "America/New_York", "message": "Message about the downtime", "monitor_identifier": {"monitor_id": 123}, "mute_first_recovery_notification": false, "notify_end_states": ["alert", "warn"], "notify_end_types": ["canceled", "expired"], "schedule": {"recurrences": [{"duration": "123d", "rrule": "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1", "start": "2020-01-02T03:04"}], "timezone": "America/New_York"}, "scope": "env:(staging OR prod) AND datacenter:us-east-1"}, "type": "downtime"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a downtime returns "Bad Request" response
    Given new "UpdateDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"display_timezone": "America/New_York", "message": "Message about the downtime", "monitor_identifier": {"monitor_id": 123}, "mute_first_recovery_notification": false, "notify_end_states": ["alert", "warn"], "notify_end_types": ["canceled", "expired"], "schedule": {"recurrences": [{"duration": "123d", "rrule": "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1", "start": "2020-01-02T03:04"}], "timezone": "America/New_York"}, "scope": "env:(staging OR prod) AND datacenter:us-east-1"}, "id": "00000000-0000-1234-0000-000000000000", "type": "downtime"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a downtime returns "Downtime not found" response
    Given new "UpdateDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"display_timezone": "America/New_York", "message": "Message about the downtime", "monitor_identifier": {"monitor_id": 123}, "mute_first_recovery_notification": false, "notify_end_states": ["alert", "warn"], "notify_end_types": ["canceled", "expired"], "schedule": {"recurrences": [{"duration": "123d", "rrule": "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1", "start": "2020-01-02T03:04"}], "timezone": "America/New_York"}, "scope": "env:(staging OR prod) AND datacenter:us-east-1"}, "id": "00000000-0000-1234-0000-000000000000", "type": "downtime"}}
    When the request is sent
    Then the response status is 404 Downtime not found

  @generated @skip
  Scenario: Update a downtime returns "OK" response
    Given new "UpdateDowntime" request
    And request contains "downtime_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"display_timezone": "America/New_York", "message": "Message about the downtime", "monitor_identifier": {"monitor_id": 123}, "mute_first_recovery_notification": false, "notify_end_states": ["alert", "warn"], "notify_end_types": ["canceled", "expired"], "schedule": {"recurrences": [{"duration": "123d", "rrule": "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1", "start": "2020-01-02T03:04"}], "timezone": "America/New_York"}, "scope": "env:(staging OR prod) AND datacenter:us-east-1"}, "id": "00000000-0000-1234-0000-000000000000", "type": "downtime"}}
    When the request is sent
    Then the response status is 200 OK
