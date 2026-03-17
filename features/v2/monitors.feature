@endpoint(monitors) @endpoint(monitors-v2)
Feature: Monitors
  [Monitors](https://docs.datadoghq.com/monitors) allow you to watch a
  metric or check that you care about and notifies your team when a defined
  threshold has exceeded.  For more information, see [Creating
  Monitors](https://docs.datadoghq.com/monitors/create/types/) and [Tag
  Policies](https://docs.datadoghq.com/monitors/settings/).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Monitors" API

  @generated @skip
  Scenario: Create a monitor configuration policy returns "Bad Request" response
    Given new "CreateMonitorConfigPolicy" request
    And body with value {"data": {"attributes": {"policy": {"tag_key": "datacenter", "tag_key_required": true, "valid_tag_values": ["prod", "staging"]}, "policy_type": "tag"}, "type": "monitor-config-policy"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a monitor configuration policy returns "OK" response
    Given new "CreateMonitorConfigPolicy" request
    And body with value {"data": {"attributes": {"policy": {"tag_key": "datacenter", "tag_key_required": true, "valid_tag_values": ["prod", "staging"]}, "policy_type": "tag"}, "type": "monitor-config-policy"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a monitor notification rule returns "Bad Request" response
    Given new "CreateMonitorNotificationRule" request
    And body with value {"data": {"attributes": {"conditional_recipients": {"conditions": [{"recipients": ["slack-test-channel", "jira-test"], "scope": "transition_type:is_alert"}], "fallback_recipients": ["slack-test-channel", "jira-test"]}, "filter": {"tags": ["team:product", "host:abc"]}, "name": "A notification rule name", "recipients": ["slack-test-channel", "jira-test"]}, "type": "monitor-notification-rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a monitor notification rule returns "OK" response
    Given new "CreateMonitorNotificationRule" request
    And body with value {"data": {"attributes": {"conditional_recipients": {"conditions": [{"recipients": ["slack-test-channel", "jira-test"], "scope": "transition_type:is_alert"}], "fallback_recipients": ["slack-test-channel", "jira-test"]}, "filter": {"tags": ["team:product", "host:abc"]}, "name": "A notification rule name", "recipients": ["slack-test-channel", "jira-test"]}, "type": "monitor-notification-rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a monitor user template returns "Bad Request" response
    Given operation "CreateMonitorUserTemplate" enabled
    And new "CreateMonitorUserTemplate" request
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a monitor user template returns "OK" response
    Given operation "CreateMonitorUserTemplate" enabled
    And new "CreateMonitorUserTemplate" request
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a monitor configuration policy returns "Bad Request" response
    Given new "DeleteMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a monitor configuration policy returns "Not Found" response
    Given new "DeleteMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a monitor configuration policy returns "OK" response
    Given new "DeleteMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a monitor notification rule returns "Not Found" response
    Given new "DeleteMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a monitor notification rule returns "OK" response
    Given new "DeleteMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a monitor user template returns "Not Found" response
    Given operation "DeleteMonitorUserTemplate" enabled
    And new "DeleteMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a monitor user template returns "OK" response
    Given operation "DeleteMonitorUserTemplate" enabled
    And new "DeleteMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Edit a monitor configuration policy returns "Not Found" response
    Given new "UpdateMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"policy": {"tag_key": "datacenter", "tag_key_required": true, "valid_tag_values": ["prod", "staging"]}, "policy_type": "tag"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-config-policy"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Edit a monitor configuration policy returns "OK" response
    Given new "UpdateMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"policy": {"tag_key": "datacenter", "tag_key_required": true, "valid_tag_values": ["prod", "staging"]}, "policy_type": "tag"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-config-policy"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit a monitor configuration policy returns "Unprocessable Entity" response
    Given new "UpdateMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"policy": {"tag_key": "datacenter", "tag_key_required": true, "valid_tag_values": ["prod", "staging"]}, "policy_type": "tag"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-config-policy"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity

  @generated @skip
  Scenario: Get a monitor configuration policy returns "Not Found" response
    Given new "GetMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a monitor configuration policy returns "OK" response
    Given new "GetMonitorConfigPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a monitor notification rule returns "Not Found" response
    Given new "GetMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a monitor notification rule returns "OK" response
    Given new "GetMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a monitor user template returns "Not Found" response
    Given operation "GetMonitorUserTemplate" enabled
    And new "GetMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a monitor user template returns "OK" response
    Given operation "GetMonitorUserTemplate" enabled
    And new "GetMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all monitor configuration policies returns "OK" response
    Given new "ListMonitorConfigPolicies" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all monitor notification rules returns "OK" response
    Given new "GetMonitorNotificationRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all monitor user templates returns "OK" response
    Given operation "ListMonitorUserTemplates" enabled
    And new "ListMonitorUserTemplates" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a monitor notification rule returns "Bad Request" response
    Given new "UpdateMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conditional_recipients": {"conditions": [{"recipients": ["slack-test-channel", "jira-test"], "scope": "transition_type:is_alert"}], "fallback_recipients": ["slack-test-channel", "jira-test"]}, "filter": {"tags": ["team:product", "host:abc"]}, "name": "A notification rule name", "recipients": ["slack-test-channel", "jira-test"]}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-notification-rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a monitor notification rule returns "Not Found" response
    Given new "UpdateMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conditional_recipients": {"conditions": [{"recipients": ["slack-test-channel", "jira-test"], "scope": "transition_type:is_alert"}], "fallback_recipients": ["slack-test-channel", "jira-test"]}, "filter": {"tags": ["team:product", "host:abc"]}, "name": "A notification rule name", "recipients": ["slack-test-channel", "jira-test"]}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-notification-rule"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a monitor notification rule returns "OK" response
    Given new "UpdateMonitorNotificationRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"conditional_recipients": {"conditions": [{"recipients": ["slack-test-channel", "jira-test"], "scope": "transition_type:is_alert"}], "fallback_recipients": ["slack-test-channel", "jira-test"]}, "filter": {"tags": ["team:product", "host:abc"]}, "name": "A notification rule name", "recipients": ["slack-test-channel", "jira-test"]}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-notification-rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a monitor user template to a new version returns "Bad Request" response
    Given operation "UpdateMonitorUserTemplate" enabled
    And new "UpdateMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a monitor user template to a new version returns "Not Found" response
    Given operation "UpdateMonitorUserTemplate" enabled
    And new "UpdateMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a monitor user template to a new version returns "OK" response
    Given operation "UpdateMonitorUserTemplate" enabled
    And new "UpdateMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Validate a monitor user template returns "Bad Request" response
    Given operation "ValidateMonitorUserTemplate" enabled
    And new "ValidateMonitorUserTemplate" request
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Validate a monitor user template returns "OK" response
    Given operation "ValidateMonitorUserTemplate" enabled
    And new "ValidateMonitorUserTemplate" request
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Validate an existing monitor user template returns "Bad Request" response
    Given operation "ValidateExistingMonitorUserTemplate" enabled
    And new "ValidateExistingMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Validate an existing monitor user template returns "Not Found" response
    Given operation "ValidateExistingMonitorUserTemplate" enabled
    And new "ValidateExistingMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Validate an existing monitor user template returns "OK" response
    Given operation "ValidateExistingMonitorUserTemplate" enabled
    And new "ValidateExistingMonitorUserTemplate" request
    And request contains "template_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "This is a template for monitoring user activity.", "monitor_definition": {"message": "You may need to add web hosts if this is consistently high.", "name": "Bytes received on host0", "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "type": "query alert"}, "tags": ["product:Our Custom App", "integration:Azure"], "template_variables": [{"available_values": ["value1", "value2"], "defaults": ["defaultValue"], "name": "regionName", "tag_key": "datacenter"}], "title": "Postgres CPU Monitor"}, "id": "00000000-0000-1234-0000-000000000000", "type": "monitor-user-template"}}
    When the request is sent
    Then the response status is 204 OK
