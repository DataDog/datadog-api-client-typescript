@endpoint(monitors) @endpoint(monitors-v1)
Feature: Monitors
  [Monitors](https://docs.datadoghq.com/monitors) allow you to watch a
  metric or check that you care about and notifies your team when a defined
  threshold has exceeded.  For more information, see [Creating
  Monitors](https://docs.datadoghq.com/monitors/create/types/).  **Note:**
  `curl` commands require [url encoding](https://curl.se/docs/url-
  syntax.html).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Monitors" API

  @generated @skip
  Scenario: Check if a monitor can be deleted returns "Bad Request" response
    Given new "CheckCanDeleteMonitor" request
    And request contains "monitor_ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Check if a monitor can be deleted returns "Deletion conflict error" response
    Given new "CheckCanDeleteMonitor" request
    And request contains "monitor_ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Deletion conflict error

  @generated @skip
  Scenario: Check if a monitor can be deleted returns "OK" response
    Given new "CheckCanDeleteMonitor" request
    And request contains "monitor_ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a monitor returns "Bad Request" response
    Given new "CreateMonitor" request
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a monitor returns "OK" response
    Given new "CreateMonitor" request
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a monitor returns "Bad Request" response
    Given new "DeleteMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a monitor returns "Item not found error" response
    Given new "DeleteMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Item not found error

  @generated @skip
  Scenario: Delete a monitor returns "OK" response
    Given new "DeleteMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit a monitor returns "Bad Request" response
    Given new "UpdateMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Edit a monitor returns "Monitor Not Found error" response
    Given new "UpdateMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 404 Monitor Not Found error

  @generated @skip
  Scenario: Edit a monitor returns "OK" response
    Given new "UpdateMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a monitor's details returns "Bad Request" response
    Given new "GetMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a monitor's details returns "Monitor Not Found error" response
    Given new "GetMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Monitor Not Found error

  @generated @skip
  Scenario: Get a monitor's details returns "OK" response
    Given new "GetMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all monitors returns "Bad Request" response
    Given new "ListMonitors" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all monitors returns "OK" response
    Given new "ListMonitors" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all monitors returns "OK" response with pagination
    Given new "ListMonitors" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Monitors group search returns "Bad Request" response
    Given new "SearchMonitorGroups" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Monitors group search returns "OK" response
    Given new "SearchMonitorGroups" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Monitors search returns "Bad Request" response
    Given new "SearchMonitors" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Monitors search returns "OK" response
    Given new "SearchMonitors" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Validate a monitor returns "Invalid JSON" response
    Given new "ValidateMonitor" request
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 400 Invalid JSON

  @generated @skip
  Scenario: Validate a monitor returns "OK" response
    Given new "ValidateMonitor" request
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Validate an existing monitor returns "Invalid JSON" response
    Given new "ValidateExistingMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 400 Invalid JSON

  @generated @skip
  Scenario: Validate an existing monitor returns "OK" response
    Given new "ValidateExistingMonitor" request
    And request contains "monitor_id" parameter from "REPLACE.ME"
    And body with value {"assets": [{"category": "runbook", "name": "Monitor Runbook", "resource_key": "12345", "resource_type": "notebook", "url": "/notebooks/12345"}], "draft_status": "published", "matching_downtimes": [{"end": 1412792983, "scope": ["env:staging"], "start": 1412792983}], "name": "My monitor", "options": {"evaluation_delay": null, "include_tags": true, "min_failure_duration": 0, "min_location_failed": 1, "new_group_delay": null, "new_host_delay": 300, "no_data_timeframe": null, "notification_preset_name": "show_all", "notify_audit": false, "notify_by": [], "on_missing_data": "default", "renotify_interval": null, "renotify_occurrences": null, "renotify_statuses": ["alert"], "scheduling_options": {"custom_schedule": {"recurrences": [{"rrule": "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR", "start": "2023-08-31T16:30:00", "timezone": "Europe/Paris"}]}, "evaluation_window": {"day_starts": "04:00", "hour_starts": 0, "month_starts": 1, "timezone": "Europe/Paris"}}, "synthetics_check_id": null, "threshold_windows": {"recovery_window": null, "trigger_window": null}, "thresholds": {"critical_recovery": null, "ok": null, "unknown": null, "warning": null, "warning_recovery": null}, "timeout_h": null, "variables": [{"compute": {"aggregation": "avg", "interval": 60000, "metric": "@duration", "name": "compute_result"}, "data_source": "rum", "group_by": [{"facet": "status", "limit": 10, "sort": {"aggregation": "avg", "order": "desc"}}], "indexes": ["days-3", "days-7"], "name": "query_errors", "search": {"query": "service:query"}}]}, "priority": null, "query": "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100", "restricted_roles": [], "tags": [], "type": "query alert"}
    When the request is sent
    Then the response status is 200 OK
