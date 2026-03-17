@endpoint(on-call) @endpoint(on-call-v2)
Feature: On-Call
  Configure your [Datadog On-
  Call](https://docs.datadoghq.com/service_management/on-call/) directly
  through the Datadog API.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "On-Call" API

  @generated @skip
  Scenario: Create On-Call escalation policy returns "Bad Request" response
    Given new "CreateOnCallEscalationPolicy" request
    And body with value {"data": {"attributes": {"name": "Escalation Policy 1", "resolve_page_on_policy_end": true, "retries": 2, "steps": [{"assignment": "default", "escalate_after_seconds": 3600, "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"config": {"schedule": {"position": "previous"}}, "id": "00000000-aba2-0000-0000-000000000000", "type": "schedules"}, {"id": "00000000-aba3-0000-0000-000000000000", "type": "teams"}]}, {"assignment": "round-robin", "escalate_after_seconds": 3600, "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"id": "00000000-abb1-0000-0000-000000000000", "type": "users"}]}]}, "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "policies"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create On-Call escalation policy returns "Created" response
    Given new "CreateOnCallEscalationPolicy" request
    And body with value {"data": {"attributes": {"name": "Escalation Policy 1", "resolve_page_on_policy_end": true, "retries": 2, "steps": [{"assignment": "default", "escalate_after_seconds": 3600, "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"config": {"schedule": {"position": "previous"}}, "id": "00000000-aba2-0000-0000-000000000000", "type": "schedules"}, {"id": "00000000-aba3-0000-0000-000000000000", "type": "teams"}]}, {"assignment": "round-robin", "escalate_after_seconds": 3600, "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"id": "00000000-abb1-0000-0000-000000000000", "type": "users"}]}]}, "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "policies"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create On-Call schedule returns "Bad Request" response
    Given new "CreateOnCallSchedule" request
    And body with value {"data": {"attributes": {"layers": [{"effective_date": "2025-02-03T05:00:00Z", "end_date": "2025-12-31T00:00:00Z", "interval": {"days": 1}, "members": [{"user": {"id": "00000000-aba1-0000-0000-000000000000"}}], "name": "Layer 1", "restrictions": [{"end_day": "friday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}], "rotation_start": "2025-02-01T00:00:00Z"}], "name": "On-Call Schedule", "time_zone": "America/New_York"}, "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "schedules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create On-Call schedule returns "Created" response
    Given new "CreateOnCallSchedule" request
    And body with value {"data": {"attributes": {"layers": [{"effective_date": "2025-02-03T05:00:00Z", "end_date": "2025-12-31T00:00:00Z", "interval": {"days": 1}, "members": [{"user": {"id": "00000000-aba1-0000-0000-000000000000"}}], "name": "Layer 1", "restrictions": [{"end_day": "friday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}], "rotation_start": "2025-02-01T00:00:00Z"}], "name": "On-Call Schedule", "time_zone": "America/New_York"}, "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "schedules"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create an On-Call notification channel for a user returns "Bad Request" response
    Given new "CreateUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"address": "foo@bar.com", "formats": ["html"], "type": "email"}}, "type": "notification_channels"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an On-Call notification channel for a user returns "Created" response
    Given new "CreateUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"address": "foo@bar.com", "formats": ["html"], "type": "email"}}, "type": "notification_channels"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create an On-Call notification channel for a user returns "Not Found" response
    Given new "CreateUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"address": "foo@bar.com", "formats": ["html"], "type": "email"}}, "type": "notification_channels"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create an On-Call notification rule for a user returns "Bad Request" response
    Given new "CreateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an On-Call notification rule for a user returns "Created" response
    Given new "CreateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create an On-Call notification rule for a user returns "Not Found" response
    Given new "CreateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete On-Call escalation policy returns "No Content" response
    Given new "DeleteOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete On-Call escalation policy returns "Not Found" response
    Given new "DeleteOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete On-Call schedule returns "No Content" response
    Given new "DeleteOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete On-Call schedule returns "Not Found" response
    Given new "DeleteOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an On-Call notification channel for a user returns "Bad Request" response
    Given new "DeleteUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an On-Call notification channel for a user returns "No Content" response
    Given new "DeleteUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an On-Call notification channel for a user returns "Not Found" response
    Given new "DeleteUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an On-Call notification rule for a user returns "Bad Request" response
    Given new "DeleteUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an On-Call notification rule for a user returns "No Content" response
    Given new "DeleteUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an On-Call notification rule for a user returns "Not Found" response
    Given new "DeleteUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get On-Call escalation policy returns "Bad Request" response
    Given new "GetOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get On-Call escalation policy returns "Not Found" response
    Given new "GetOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get On-Call escalation policy returns "OK" response
    Given new "GetOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get On-Call schedule returns "Not Found" response
    Given new "GetOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get On-Call schedule returns "OK" response
    Given new "GetOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get On-Call team routing rules returns "OK" response
    Given new "GetOnCallTeamRoutingRules" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an On-Call notification channel for a user returns "Bad Request" response
    Given new "GetUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an On-Call notification channel for a user returns "Not Found" response
    Given new "GetUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an On-Call notification channel for a user returns "OK" response
    Given new "GetUserNotificationChannel" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "channel_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an On-Call notification rule for a user returns "Bad Request" response
    Given new "GetUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an On-Call notification rule for a user returns "Not Found" response
    Given new "GetUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an On-Call notification rule for a user returns "OK" response
    Given new "GetUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get scheduled on-call user returns "Bad Request" response
    Given new "GetScheduleOnCallUser" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get scheduled on-call user returns "Not Found" response
    Given new "GetScheduleOnCallUser" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get scheduled on-call user returns "OK" response
    Given new "GetScheduleOnCallUser" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team on-call users returns "Bad Request" response
    Given new "GetTeamOnCallUsers" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get team on-call users returns "Not Found" response
    Given new "GetTeamOnCallUsers" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get team on-call users returns "OK" response
    Given new "GetTeamOnCallUsers" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List On-Call notification channels for a user returns "Bad Request" response
    Given new "ListUserNotificationChannels" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List On-Call notification channels for a user returns "Not Found" response
    Given new "ListUserNotificationChannels" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List On-Call notification channels for a user returns "OK" response
    Given new "ListUserNotificationChannels" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List On-Call notification rules for a user returns "Bad Request" response
    Given new "ListUserNotificationRules" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List On-Call notification rules for a user returns "Not Found" response
    Given new "ListUserNotificationRules" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List On-Call notification rules for a user returns "OK" response
    Given new "ListUserNotificationRules" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Set On-Call team routing rules returns "OK" response
    Given new "SetOnCallTeamRoutingRules" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"rules": [{"actions": null, "policy_id": "", "query": "tags.service:test", "time_restriction": {"restrictions": [{"end_day": "monday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}, {"end_day": "tuesday", "end_time": "17:00:00", "start_day": "tuesday", "start_time": "09:00:00"}], "time_zone": ""}, "urgency": "high"}, {"actions": [{"channel": "channel", "type": "send_slack_message", "workspace": "workspace"}], "policy_id": "fad4eee1-13f5-40d8-886b-4e56d8d5d1c6", "query": "", "time_restriction": null, "urgency": "low"}]}, "id": "27590dae-47be-4a7d-9abf-8f4e45124020", "type": "team_routing_rules"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update On-Call escalation policy returns "Bad Request" response
    Given new "UpdateOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Escalation Policy 1", "resolve_page_on_policy_end": false, "retries": 2, "steps": [{"assignment": "default", "escalate_after_seconds": 3600, "id": "00000000-aba1-0000-0000-000000000000", "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"id": "00000000-aba2-0000-0000-000000000000", "type": "schedules"}]}]}, "id": "a3000000-0000-0000-0000-000000000000", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "policies"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update On-Call escalation policy returns "Not Found" response
    Given new "UpdateOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Escalation Policy 1", "resolve_page_on_policy_end": false, "retries": 2, "steps": [{"assignment": "default", "escalate_after_seconds": 3600, "id": "00000000-aba1-0000-0000-000000000000", "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"id": "00000000-aba2-0000-0000-000000000000", "type": "schedules"}]}]}, "id": "a3000000-0000-0000-0000-000000000000", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "policies"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update On-Call escalation policy returns "OK" response
    Given new "UpdateOnCallEscalationPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Escalation Policy 1", "resolve_page_on_policy_end": false, "retries": 2, "steps": [{"assignment": "default", "escalate_after_seconds": 3600, "id": "00000000-aba1-0000-0000-000000000000", "targets": [{"id": "00000000-aba1-0000-0000-000000000000", "type": "users"}, {"id": "00000000-aba2-0000-0000-000000000000", "type": "schedules"}]}]}, "id": "a3000000-0000-0000-0000-000000000000", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "policies"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update On-Call schedule returns "Bad Request" response
    Given new "UpdateOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"layers": [{"effective_date": "2025-02-03T05:00:00Z", "end_date": "2025-12-31T00:00:00Z", "interval": {"seconds": 3600}, "members": [{"user": {"id": "00000000-aba1-0000-0000-000000000000"}}], "name": "Layer 1", "restrictions": [{"end_day": "friday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}], "rotation_start": "2025-02-01T00:00:00Z"}], "name": "On-Call Schedule Updated", "time_zone": "America/New_York"}, "id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "schedules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update On-Call schedule returns "Not Found" response
    Given new "UpdateOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"layers": [{"effective_date": "2025-02-03T05:00:00Z", "end_date": "2025-12-31T00:00:00Z", "interval": {"seconds": 3600}, "members": [{"user": {"id": "00000000-aba1-0000-0000-000000000000"}}], "name": "Layer 1", "restrictions": [{"end_day": "friday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}], "rotation_start": "2025-02-01T00:00:00Z"}], "name": "On-Call Schedule Updated", "time_zone": "America/New_York"}, "id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "schedules"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update On-Call schedule returns "OK" response
    Given new "UpdateOnCallSchedule" request
    And request contains "schedule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"layers": [{"effective_date": "2025-02-03T05:00:00Z", "end_date": "2025-12-31T00:00:00Z", "interval": {"seconds": 3600}, "members": [{"user": {"id": "00000000-aba1-0000-0000-000000000000"}}], "name": "Layer 1", "restrictions": [{"end_day": "friday", "end_time": "17:00:00", "start_day": "monday", "start_time": "09:00:00"}], "rotation_start": "2025-02-01T00:00:00Z"}], "name": "On-Call Schedule Updated", "time_zone": "America/New_York"}, "id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "relationships": {"teams": {"data": [{"id": "00000000-da3a-0000-0000-000000000000", "type": "teams"}]}}, "type": "schedules"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an On-Call notification rule for a user returns "Bad Request" response
    Given new "UpdateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "id": "2462ace1-49e2-aab1-xc4f-29cc4ae1105n7", "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an On-Call notification rule for a user returns "Not Found" response
    Given new "UpdateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "id": "2462ace1-49e2-aab1-xc4f-29cc4ae1105n7", "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an On-Call notification rule for a user returns "OK" response
    Given new "UpdateUserNotificationRule" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "high_urgency", "channel_settings": {"method": "sms", "type": "phone"}, "delay_minutes": 1}, "id": "2462ace1-49e2-aab1-xc4f-29cc4ae1105n7", "relationships": {"channel": {"data": {"id": "1562fab3-a8c2-49e2-8f3a-28dcda2405e2", "type": "notification_channels"}}}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 200 OK
