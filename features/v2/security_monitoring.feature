@endpoint(security-monitoring) @endpoint(security-monitoring-v2)
Feature: Security Monitoring
  Create and manage your security rules, signals, filters, and more. See the
  [Datadog Security page](https://docs.datadoghq.com/security/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "SecurityMonitoring" API

  @generated @skip
  Scenario: Activate content pack returns "Accepted" response
    Given operation "ActivateContentPack" enabled
    And new "ActivateContentPack" request
    And request contains "content_pack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Activate content pack returns "Not Found" response
    Given operation "ActivateContentPack" enabled
    And new "ActivateContentPack" request
    And request contains "content_pack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Attach security findings to a Jira issue returns "Bad Request" response
    Given new "AttachJiraIssue" request
    And body with value {"data": {"attributes": {"jira_issue_url": "https://domain.atlassian.net/browse/PROJ-123"}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Attach security findings to a Jira issue returns "Not Found" response
    Given new "AttachJiraIssue" request
    And body with value {"data": {"attributes": {"jira_issue_url": "https://domain.atlassian.net/browse/PROJ-123"}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Attach security findings to a Jira issue returns "OK" response
    Given new "AttachJiraIssue" request
    And body with value {"data": {"attributes": {"jira_issue_url": "https://domain.atlassian.net/browse/PROJ-123"}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Attach security findings to a case returns "Bad Request" response
    Given new "AttachCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "c1234567-89ab-cdef-0123-456789abcdef", "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Attach security findings to a case returns "Not Found" response
    Given new "AttachCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "c1234567-89ab-cdef-0123-456789abcdef", "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Attach security findings to a case returns "OK" response
    Given new "AttachCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "c1234567-89ab-cdef-0123-456789abcdef", "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Bulk export security monitoring rules returns "Bad Request" response
    Given new "BulkExportSecurityMonitoringRules" request
    And body with value {"data": {"attributes": {"ruleIds": ["def-000-u7q", "def-000-7dd"]}, "id": "bulk_export", "type": "security_monitoring_rules_bulk_export"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Bulk export security monitoring rules returns "Not Found" response
    Given new "BulkExportSecurityMonitoringRules" request
    And body with value {"data": {"attributes": {"ruleIds": ["def-000-u7q", "def-000-7dd"]}, "id": "bulk_export", "type": "security_monitoring_rules_bulk_export"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Bulk export security monitoring rules returns "OK" response
    Given new "BulkExportSecurityMonitoringRules" request
    And body with value {"data": {"attributes": {"ruleIds": ["def-000-u7q", "def-000-7dd"]}, "id": "bulk_export", "type": "security_monitoring_rules_bulk_export"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Cancel a threat hunting job returns "Bad Request" response
    Given operation "CancelThreatHuntingJob" enabled
    And new "CancelThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Cancel a threat hunting job returns "Conflict" response
    Given operation "CancelThreatHuntingJob" enabled
    And new "CancelThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Cancel a threat hunting job returns "Not Found" response
    Given operation "CancelThreatHuntingJob" enabled
    And new "CancelThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Cancel a threat hunting job returns "OK" response
    Given operation "CancelThreatHuntingJob" enabled
    And new "CancelThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Change the related incidents of a security signal returns "Bad Request" response
    Given new "EditSecurityMonitoringSignalIncidents" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"incident_ids": [2066]}}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Change the related incidents of a security signal returns "Not Found" response
    Given new "EditSecurityMonitoringSignalIncidents" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"incident_ids": [2066]}}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Change the related incidents of a security signal returns "OK" response
    Given new "EditSecurityMonitoringSignalIncidents" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"incident_ids": [2066]}}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Change the triage state of a security signal returns "Bad Request" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"archive_reason": "none", "state": "open"}, "type": "signal_metadata"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Change the triage state of a security signal returns "Not Found" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"archive_reason": "none", "state": "open"}, "type": "signal_metadata"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Change the triage state of a security signal returns "OK" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"archive_reason": "none", "state": "open"}, "type": "signal_metadata"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Convert a job result to a signal returns "Bad Request" response
    Given operation "ConvertJobResultToSignal" enabled
    And new "ConvertJobResultToSignal" request
    And body with value {"data": {"attributes": {"jobResultIds": [""], "notifications": [""], "signalMessage": "A large number of failed login attempts.", "signalSeverity": "critical"}, "type": "historicalDetectionsJobResultSignalConversion"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Convert a job result to a signal returns "Not Found" response
    Given operation "ConvertJobResultToSignal" enabled
    And new "ConvertJobResultToSignal" request
    And body with value {"data": {"attributes": {"jobResultIds": [""], "notifications": [""], "signalMessage": "A large number of failed login attempts.", "signalSeverity": "critical"}, "type": "historicalDetectionsJobResultSignalConversion"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Convert a job result to a signal returns "OK" response
    Given operation "ConvertJobResultToSignal" enabled
    And new "ConvertJobResultToSignal" request
    And body with value {"data": {"attributes": {"jobResultIds": [""], "notifications": [""], "signalMessage": "A large number of failed login attempts.", "signalSeverity": "critical"}, "type": "historicalDetectionsJobResultSignalConversion"}}
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Convert a rule from JSON to Terraform returns "Bad Request" response
    Given new "ConvertSecurityMonitoringRuleFromJSONToTerraform" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Convert a rule from JSON to Terraform returns "Not Found" response
    Given new "ConvertSecurityMonitoringRuleFromJSONToTerraform" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Convert a rule from JSON to Terraform returns "OK" response
    Given new "ConvertSecurityMonitoringRuleFromJSONToTerraform" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Convert an existing rule from JSON to Terraform returns "Bad Request" response
    Given new "ConvertExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Convert an existing rule from JSON to Terraform returns "Not Found" response
    Given new "ConvertExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Convert an existing rule from JSON to Terraform returns "OK" response
    Given new "ConvertExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create Jira issues for security findings returns "Bad Request" response
    Given new "CreateJiraIssues" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the Jira issue.", "fields": {"key1": "value", "key2": ["value"], "key3": {"key4": "value"}}, "priority": "NOT_DEFINED", "title": "A title for the Jira issue."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Jira issues for security findings returns "Created" response
    Given new "CreateJiraIssues" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the Jira issue.", "fields": {"key1": "value", "key2": ["value"], "key3": {"key4": "value"}}, "priority": "NOT_DEFINED", "title": "A title for the Jira issue."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}]}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create Jira issues for security findings returns "Not Found" response
    Given new "CreateJiraIssues" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the Jira issue.", "fields": {"key1": "value", "key2": ["value"], "key3": {"key4": "value"}}, "priority": "NOT_DEFINED", "title": "A title for the Jira issue."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "jira_issues"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create a critical asset returns "Bad Request" response
    Given new "CreateSecurityMonitoringCriticalAsset" request
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:(log_detection OR signal_correlation OR workload_security OR application_security) source:cloudtrail", "severity": "increase", "tags": ["team:database", "source:cloudtrail"]}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a critical asset returns "Conflict" response
    Given new "CreateSecurityMonitoringCriticalAsset" request
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:(log_detection OR signal_correlation OR workload_security OR application_security) source:cloudtrail", "severity": "increase", "tags": ["team:database", "source:cloudtrail"]}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a critical asset returns "OK" response
    Given new "CreateSecurityMonitoringCriticalAsset" request
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:(log_detection OR signal_correlation OR workload_security OR application_security) source:cloudtrail", "severity": "increase", "tags": ["team:database", "source:cloudtrail"]}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a custom framework returns "Bad Request" response
    Given new "CreateCustomFramework" request
    And body with value {"data": {"attributes": {"handle": "sec2", "name": "security-framework", "requirements": [{"controls": [{"name": "A1.2", "rules_id": ["[\"def-000-abc\"]"]}], "name": "criteria"}], "version": "2"}, "type": "custom_framework"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a custom framework returns "Conflict" response
    Given new "CreateCustomFramework" request
    And body with value {"data": {"attributes": {"handle": "sec2", "name": "security-framework", "requirements": [{"controls": [{"name": "A1.2", "rules_id": ["[\"def-000-abc\"]"]}], "name": "criteria"}], "version": "2"}, "type": "custom_framework"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a custom framework returns "OK" response
    Given new "CreateCustomFramework" request
    And body with value {"data": {"attributes": {"handle": "sec2", "name": "security-framework", "requirements": [{"controls": [{"name": "A1.2", "rules_id": ["[\"def-000-abc\"]"]}], "name": "criteria"}], "version": "2"}, "type": "custom_framework"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a detection rule returns "Bad Request" response
    Given new "CreateSecurityMonitoringRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a detection rule returns "OK" response
    Given new "CreateSecurityMonitoringRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a new signal-based notification rule returns "Bad Request" response
    Given new "CreateSignalNotificationRule" request
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new signal-based notification rule returns "Successfully created the notification rule." response
    Given new "CreateSignalNotificationRule" request
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 201 Successfully created the notification rule.

  @generated @skip
  Scenario: Create a new vulnerability-based notification rule returns "Bad Request" response
    Given new "CreateVulnerabilityNotificationRule" request
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new vulnerability-based notification rule returns "Successfully created the notification rule." response
    Given new "CreateVulnerabilityNotificationRule" request
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400}, "type": "notification_rules"}}
    When the request is sent
    Then the response status is 201 Successfully created the notification rule.

  @generated @skip
  Scenario: Create a security filter returns "Bad Request" response
    Given new "CreateSecurityFilter" request
    And body with value {"data": {"attributes": {"exclusion_filters": [{"name": "Exclude staging", "query": "source:staging"}], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api"}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a security filter returns "Conflict" response
    Given new "CreateSecurityFilter" request
    And body with value {"data": {"attributes": {"exclusion_filters": [{"name": "Exclude staging", "query": "source:staging"}], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api"}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a security filter returns "OK" response
    Given new "CreateSecurityFilter" request
    And body with value {"data": {"attributes": {"exclusion_filters": [{"name": "Exclude staging", "query": "source:staging"}], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api"}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a suppression rule returns "Bad Request" response
    Given new "CreateSecurityMonitoringSuppression" request
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a suppression rule returns "Conflict" response
    Given new "CreateSecurityMonitoringSuppression" request
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a suppression rule returns "OK" response
    Given new "CreateSecurityMonitoringSuppression" request
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create cases for security findings returns "Bad Request" response
    Given new "CreateCases" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the case.", "priority": "NOT_DEFINED", "title": "A title for the case."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "cases"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create cases for security findings returns "Created" response
    Given new "CreateCases" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the case.", "priority": "NOT_DEFINED", "title": "A title for the case."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "cases"}]}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create cases for security findings returns "Not Found" response
    Given new "CreateCases" request
    And body with value {"data": [{"attributes": {"assignee_id": "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0", "description": "A description of the case.", "priority": "NOT_DEFINED", "title": "A title for the case."}, "relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}, "project": {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "projects"}}}, "type": "cases"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Deactivate content pack returns "Accepted" response
    Given operation "DeactivateContentPack" enabled
    And new "DeactivateContentPack" request
    And request contains "content_pack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Deactivate content pack returns "Not Found" response
    Given operation "DeactivateContentPack" enabled
    And new "DeactivateContentPack" request
    And request contains "content_pack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a critical asset returns "Not Found" response
    Given new "DeleteSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a critical asset returns "OK" response
    Given new "DeleteSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a custom framework returns "Bad Request" response
    Given new "DeleteCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a custom framework returns "OK" response
    Given new "DeleteCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a security filter returns "Not Found" response
    Given new "DeleteSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a security filter returns "OK" response
    Given new "DeleteSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a signal-based notification rule returns "Not Found" response
    Given new "DeleteSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a signal-based notification rule returns "Rule successfully deleted." response
    Given new "DeleteSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 Rule successfully deleted.

  @generated @skip
  Scenario: Delete a suppression rule returns "Not Found" response
    Given new "DeleteSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a suppression rule returns "OK" response
    Given new "DeleteSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a vulnerability-based notification rule returns "Not Found" response
    Given new "DeleteVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a vulnerability-based notification rule returns "Rule successfully deleted." response
    Given new "DeleteVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 Rule successfully deleted.

  @generated @skip
  Scenario: Delete an existing job returns "Bad Request" response
    Given operation "DeleteThreatHuntingJob" enabled
    And new "DeleteThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an existing job returns "Conflict" response
    Given operation "DeleteThreatHuntingJob" enabled
    And new "DeleteThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete an existing job returns "Not Found" response
    Given operation "DeleteThreatHuntingJob" enabled
    And new "DeleteThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an existing job returns "OK" response
    Given operation "DeleteThreatHuntingJob" enabled
    And new "DeleteThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete an existing rule returns "Not Found" response
    Given new "DeleteSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an existing rule returns "OK" response
    Given new "DeleteSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Detach security findings from their case returns "Bad Request" response
    Given new "DetachCase" request
    And body with value {"data": {"relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Detach security findings from their case returns "No Content" response
    Given new "DetachCase" request
    And body with value {"data": {"relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Detach security findings from their case returns "Not Found" response
    Given new "DetachCase" request
    And body with value {"data": {"relationships": {"findings": {"data": [{"id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==", "type": "findings"}]}}, "type": "cases"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get SBOM returns "Bad request: The server cannot process the request due to invalid syntax in the request." response
    Given new "GetSBOM" request
    And request contains "asset_type" parameter from "REPLACE.ME"
    And request contains "filter[asset_name]" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: Get SBOM returns "Not found: asset not found" response
    Given new "GetSBOM" request
    And request contains "asset_type" parameter from "REPLACE.ME"
    And request contains "filter[asset_name]" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found: asset not found

  @generated @skip
  Scenario: Get SBOM returns "OK" response
    Given new "GetSBOM" request
    And request contains "asset_type" parameter from "REPLACE.ME"
    And request contains "filter[asset_name]" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a critical asset returns "Not Found" response
    Given new "GetSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a critical asset returns "OK" response
    Given new "GetSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a custom framework returns "Bad Request" response
    Given new "GetCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a custom framework returns "OK" response
    Given new "GetCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a finding returns "Bad Request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "GetFinding" enabled
    And new "GetFinding" request
    And request contains "finding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: Get a finding returns "Not Found: The requested finding cannot be found." response
    Given operation "GetFinding" enabled
    And new "GetFinding" request
    And request contains "finding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found: The requested finding cannot be found.

  @generated @skip
  Scenario: Get a finding returns "OK" response
    Given operation "GetFinding" enabled
    And new "GetFinding" request
    And request contains "finding_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a hist signal's details returns "Bad Request" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a hist signal's details returns "Not Found" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a hist signal's details returns "OK" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a job's details returns "Bad Request" response
    Given operation "GetThreatHuntingJob" enabled
    And new "GetThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a job's details returns "Not Found" response
    Given operation "GetThreatHuntingJob" enabled
    And new "GetThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a job's details returns "OK" response
    Given operation "GetThreatHuntingJob" enabled
    And new "GetThreatHuntingJob" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a job's hist signals returns "Bad Request" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a job's hist signals returns "Not Found" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a job's hist signals returns "OK" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of security signals returns "Bad Request" response
    Given new "SearchSecurityMonitoringSignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of security signals returns "OK" response
    Given new "SearchSecurityMonitoringSignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of security signals returns "OK" response with pagination
    Given new "SearchSecurityMonitoringSignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a quick list of security signals returns "Bad Request" response
    Given new "ListSecurityMonitoringSignals" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a quick list of security signals returns "OK" response
    Given new "ListSecurityMonitoringSignals" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a quick list of security signals returns "OK" response with pagination
    Given new "ListSecurityMonitoringSignals" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a rule's details returns "Not Found" response
    Given new "GetSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a rule's details returns "OK" response
    Given new "GetSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a rule's version history returns "Bad Request" response
    Given operation "GetRuleVersionHistory" enabled
    And new "GetRuleVersionHistory" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a rule's version history returns "Not Found" response
    Given operation "GetRuleVersionHistory" enabled
    And new "GetRuleVersionHistory" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a rule's version history returns "OK" response
    Given operation "GetRuleVersionHistory" enabled
    And new "GetRuleVersionHistory" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a security filter returns "Not Found" response
    Given new "GetSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a security filter returns "OK" response
    Given new "GetSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a signal's details returns "Not Found" response
    Given new "GetSecurityMonitoringSignal" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a signal's details returns "OK" response
    Given new "GetSecurityMonitoringSignal" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a suppression rule returns "Not Found" response
    Given new "GetSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a suppression rule returns "OK" response
    Given new "GetSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a suppression's version history returns "Not Found" response
    Given new "GetSuppressionVersionHistory" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a suppression's version history returns "OK" response
    Given new "GetSuppressionVersionHistory" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all critical assets returns "OK" response
    Given new "ListSecurityMonitoringCriticalAssets" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all security filters returns "OK" response
    Given new "ListSecurityFilters" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all suppression rules returns "OK" response
    Given new "ListSecurityMonitoringSuppressions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get content pack states returns "Not Found" response
    Given operation "GetContentPacksStates" enabled
    And new "GetContentPacksStates" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get content pack states returns "OK" response
    Given operation "GetContentPacksStates" enabled
    And new "GetContentPacksStates" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get critical assets affecting a specific rule returns "Not Found" response
    Given new "GetCriticalAssetsAffectingRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get critical assets affecting a specific rule returns "OK" response
    Given new "GetCriticalAssetsAffectingRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get details of a signal-based notification rule returns "Bad Request" response
    Given new "GetSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get details of a signal-based notification rule returns "Not Found" response
    Given new "GetSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get details of a signal-based notification rule returns "Notification rule details." response
    Given new "GetSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Notification rule details.

  @generated @skip
  Scenario: Get details of a vulnerability notification rule returns "Bad Request" response
    Given new "GetVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get details of a vulnerability notification rule returns "Not Found" response
    Given new "GetVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get details of a vulnerability notification rule returns "Notification rule details." response
    Given new "GetVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Notification rule details.

  @generated @skip
  Scenario: Get suppressions affecting a specific rule returns "Not Found" response
    Given new "GetSuppressionsAffectingRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get suppressions affecting a specific rule returns "OK" response
    Given new "GetSuppressionsAffectingRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get suppressions affecting future rule returns "Bad Request" response
    Given new "GetSuppressionsAffectingFutureRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get suppressions affecting future rule returns "OK" response
    Given new "GetSuppressionsAffectingFutureRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of signal-based notification rules returns "The list of notification rules." response
    Given new "GetSignalNotificationRules" request
    When the request is sent
    Then the response status is 200 The list of notification rules.

  @generated @skip
  Scenario: Get the list of vulnerability notification rules returns "The list of notification rules." response
    Given new "GetVulnerabilityNotificationRules" request
    When the request is sent
    Then the response status is 200 The list of notification rules.

  @generated @skip
  Scenario: List assets SBOMs returns "Bad request: The server cannot process the request due to invalid syntax in the request." response
    Given new "ListAssetsSBOMs" request
    When the request is sent
    Then the response status is 400 Bad request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: List assets SBOMs returns "Not found: asset not found" response
    Given new "ListAssetsSBOMs" request
    When the request is sent
    Then the response status is 404 Not found: asset not found

  @generated @skip
  Scenario: List assets SBOMs returns "OK" response
    Given new "ListAssetsSBOMs" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List findings returns "Bad Request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "ListFindings" enabled
    And new "ListFindings" request
    When the request is sent
    Then the response status is 400 Bad Request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: List findings returns "Not Found: The requested finding cannot be found." response
    Given operation "ListFindings" enabled
    And new "ListFindings" request
    When the request is sent
    Then the response status is 404 Not Found: The requested finding cannot be found.

  @generated @skip
  Scenario: List findings returns "OK" response
    Given operation "ListFindings" enabled
    And new "ListFindings" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List findings returns "OK" response with pagination
    Given operation "ListFindings" enabled
    And new "ListFindings" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List hist signals returns "Bad Request" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List hist signals returns "Not Found" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List hist signals returns "OK" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List resource filters returns "Bad Request" response
    Given new "GetResourceEvaluationFilters" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List resource filters returns "OK" response
    Given new "GetResourceEvaluationFilters" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List rules returns "Bad Request" response
    Given new "ListSecurityMonitoringRules" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List rules returns "OK" response
    Given new "ListSecurityMonitoringRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List scanned assets metadata returns "Bad request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "ListScannedAssetsMetadata" enabled
    And new "ListScannedAssetsMetadata" request
    When the request is sent
    Then the response status is 400 Bad request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: List scanned assets metadata returns "Not found: asset not found" response
    Given operation "ListScannedAssetsMetadata" enabled
    And new "ListScannedAssetsMetadata" request
    When the request is sent
    Then the response status is 404 Not found: asset not found

  @generated @skip
  Scenario: List scanned assets metadata returns "OK" response
    Given operation "ListScannedAssetsMetadata" enabled
    And new "ListScannedAssetsMetadata" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List security findings returns "Bad Request" response
    Given new "ListSecurityFindings" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List security findings returns "OK" response
    Given new "ListSecurityFindings" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List security findings returns "OK" response with pagination
    Given new "ListSecurityFindings" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List threat hunting jobs returns "Bad Request" response
    Given operation "ListThreatHuntingJobs" enabled
    And new "ListThreatHuntingJobs" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List threat hunting jobs returns "OK" response
    Given operation "ListThreatHuntingJobs" enabled
    And new "ListThreatHuntingJobs" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List vulnerabilities returns "Bad request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "ListVulnerabilities" enabled
    And new "ListVulnerabilities" request
    When the request is sent
    Then the response status is 400 Bad request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: List vulnerabilities returns "Not found: There is no request associated with the provided token." response
    Given operation "ListVulnerabilities" enabled
    And new "ListVulnerabilities" request
    When the request is sent
    Then the response status is 404 Not found: There is no request associated with the provided token.

  @generated @skip
  Scenario: List vulnerabilities returns "OK" response
    Given operation "ListVulnerabilities" enabled
    And new "ListVulnerabilities" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List vulnerable assets returns "Bad request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "ListVulnerableAssets" enabled
    And new "ListVulnerableAssets" request
    When the request is sent
    Then the response status is 400 Bad request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: List vulnerable assets returns "Not found: There is no request associated with the provided token." response
    Given operation "ListVulnerableAssets" enabled
    And new "ListVulnerableAssets" request
    When the request is sent
    Then the response status is 404 Not found: There is no request associated with the provided token.

  @generated @skip
  Scenario: List vulnerable assets returns "OK" response
    Given operation "ListVulnerableAssets" enabled
    And new "ListVulnerableAssets" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "Bad Request" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee": {"name": null, "uuid": "773b045d-ccf8-4808-bd3b-955ef6a8c940"}}}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "Not Found" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee": {"name": null, "uuid": "773b045d-ccf8-4808-bd3b-955ef6a8c940"}}}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "OK" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee": {"name": null, "uuid": "773b045d-ccf8-4808-bd3b-955ef6a8c940"}}}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Mute or unmute a batch of findings returns "Bad Request: The server cannot process the request due to invalid syntax in the request." response
    Given operation "MuteFindings" enabled
    And new "MuteFindings" request
    And body with value {"data": {"attributes": {"mute": {"expiration_date": 1778721573794, "muted": true, "reason": "ACCEPTED_RISK"}}, "id": "dbe5f567-192b-4404-b908-29b70e1c9f76", "meta": {"findings": [{"finding_id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw=="}]}, "type": "finding"}}
    When the request is sent
    Then the response status is 400 Bad Request: The server cannot process the request due to invalid syntax in the request.

  @generated @skip
  Scenario: Mute or unmute a batch of findings returns "Invalid Request: The server understands the request syntax but cannot process it due to invalid data." response
    Given operation "MuteFindings" enabled
    And new "MuteFindings" request
    And body with value {"data": {"attributes": {"mute": {"expiration_date": 1778721573794, "muted": true, "reason": "ACCEPTED_RISK"}}, "id": "dbe5f567-192b-4404-b908-29b70e1c9f76", "meta": {"findings": [{"finding_id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw=="}]}, "type": "finding"}}
    When the request is sent
    Then the response status is 422 Invalid Request: The server understands the request syntax but cannot process it due to invalid data.

  @generated @skip
  Scenario: Mute or unmute a batch of findings returns "Not Found: The requested finding cannot be found." response
    Given operation "MuteFindings" enabled
    And new "MuteFindings" request
    And body with value {"data": {"attributes": {"mute": {"expiration_date": 1778721573794, "muted": true, "reason": "ACCEPTED_RISK"}}, "id": "dbe5f567-192b-4404-b908-29b70e1c9f76", "meta": {"findings": [{"finding_id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw=="}]}, "type": "finding"}}
    When the request is sent
    Then the response status is 404 Not Found: The requested finding cannot be found.

  @generated @skip
  Scenario: Mute or unmute a batch of findings returns "OK" response
    Given operation "MuteFindings" enabled
    And new "MuteFindings" request
    And body with value {"data": {"attributes": {"mute": {"expiration_date": 1778721573794, "muted": true, "reason": "ACCEPTED_RISK"}}, "id": "dbe5f567-192b-4404-b908-29b70e1c9f76", "meta": {"findings": [{"finding_id": "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw=="}]}, "type": "finding"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Patch a signal-based notification rule returns "Bad Request" response
    Given new "PatchSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Patch a signal-based notification rule returns "Not Found" response
    Given new "PatchSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Patch a signal-based notification rule returns "Notification rule successfully patched." response
    Given new "PatchSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 200 Notification rule successfully patched.

  @generated @skip
  Scenario: Patch a signal-based notification rule returns "The server cannot process the request because it contains invalid data." response
    Given new "PatchSignalNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 422 The server cannot process the request because it contains invalid data.

  @generated @skip
  Scenario: Patch a vulnerability-based notification rule returns "Bad Request" response
    Given new "PatchVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Patch a vulnerability-based notification rule returns "Not Found" response
    Given new "PatchVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Patch a vulnerability-based notification rule returns "Notification rule successfully patched." response
    Given new "PatchVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 200 Notification rule successfully patched.

  @generated @skip
  Scenario: Patch a vulnerability-based notification rule returns "The server cannot process the request because it contains invalid data." response
    Given new "PatchVulnerabilityNotificationRule" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "name": "Rule 1", "selectors": {"query": "(source:production_service OR env:prod)", "rule_types": ["misconfiguration", "attack_path"], "severities": ["critical"], "trigger_source": "security_findings"}, "targets": ["@john.doe@email.com"], "time_aggregation": 86400, "version": 1}, "id": "aaa-bbb-ccc", "type": "notification_rules"}}
    When the request is sent
    Then the response status is 422 The server cannot process the request because it contains invalid data.

  @generated @skip
  Scenario: Returns a list of Secrets rules returns "OK" response
    Given operation "GetSecretsRules" enabled
    And new "GetSecretsRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Ruleset get multiple returns "OK" response
    Given operation "ListMultipleRulesets" enabled
    And new "ListMultipleRulesets" request
    And body with value {"data": {"attributes": {"rulesets": []}, "type": "get_multiple_rulesets_request"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Run a threat hunting job returns "Bad Request" response
    Given operation "RunThreatHuntingJob" enabled
    And new "RunThreatHuntingJob" request
    And body with value {"data": {"attributes": {"fromRule": {"from": 1729843470000, "id": "abc-def-ghi", "index": "cloud_siem", "notifications": ["@sns-cloudtrail-results"], "to": 1729847070000}, "jobDefinition": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "notifications": [], "status": "critical"}], "from": 1729843470000, "groupSignalsBy": ["service"], "index": "cloud_siem", "message": "A large number of failed login attempts.", "name": "Excessive number of failed attempts.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "detectionMethod": "threshold", "evaluationWindow": 0, "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "tags": [], "thirdPartyCases": [], "to": 1729847070000}}, "type": "historicalDetectionsJobCreate"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Run a threat hunting job returns "Not Found" response
    Given operation "RunThreatHuntingJob" enabled
    And new "RunThreatHuntingJob" request
    And body with value {"data": {"attributes": {"fromRule": {"from": 1729843470000, "id": "abc-def-ghi", "index": "cloud_siem", "notifications": ["@sns-cloudtrail-results"], "to": 1729847070000}, "jobDefinition": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "notifications": [], "status": "critical"}], "from": 1729843470000, "groupSignalsBy": ["service"], "index": "cloud_siem", "message": "A large number of failed login attempts.", "name": "Excessive number of failed attempts.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "detectionMethod": "threshold", "evaluationWindow": 0, "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "tags": [], "thirdPartyCases": [], "to": 1729847070000}}, "type": "historicalDetectionsJobCreate"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Run a threat hunting job returns "Status created" response
    Given operation "RunThreatHuntingJob" enabled
    And new "RunThreatHuntingJob" request
    And body with value {"data": {"attributes": {"fromRule": {"from": 1729843470000, "id": "abc-def-ghi", "index": "cloud_siem", "notifications": ["@sns-cloudtrail-results"], "to": 1729847070000}, "jobDefinition": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "notifications": [], "status": "critical"}], "from": 1729843470000, "groupSignalsBy": ["service"], "index": "cloud_siem", "message": "A large number of failed login attempts.", "name": "Excessive number of failed attempts.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "detectionMethod": "threshold", "evaluationWindow": 0, "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "tags": [], "thirdPartyCases": [], "to": 1729847070000}}, "type": "historicalDetectionsJobCreate"}}
    When the request is sent
    Then the response status is 201 Status created

  @generated @skip
  Scenario: Search hist signals returns "Bad Request" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search hist signals returns "Not Found" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Search hist signals returns "OK" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search security findings returns "Bad Request" response
    Given new "SearchSecurityFindings" request
    And body with value {"data": {"attributes": {"filter": "@severity:(critical OR high) @status:open team:platform", "page": {"cursor": "eyJhZnRlciI6IkF3QUFBWnPcm1pd0FBQUJbVlBQUKBa1pqRTVdZUzSTBNemN0YWiIsLTE3Mjk0MzYwMjFdfQ==", "limit": 25}, "sort": "-@detection_changed_at"}}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search security findings returns "OK" response
    Given new "SearchSecurityFindings" request
    And body with value {"data": {"attributes": {"filter": "@severity:(critical OR high) @status:open team:platform", "page": {"cursor": "eyJhZnRlciI6IkF3QUFBWnPcm1pd0FBQUJbVlBQUKBa1pqRTVdZUzSTBNemN0YWiIsLTE3Mjk0MzYwMjFdfQ==", "limit": 25}, "sort": "-@detection_changed_at"}}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search security findings returns "OK" response with pagination
    Given new "SearchSecurityFindings" request
    And body with value {"data": {"attributes": {"filter": "@severity:(critical OR high) @status:open team:platform", "page": {"cursor": "eyJhZnRlciI6IkF3QUFBWnPcm1pd0FBQUJbVlBQUKBa1pqRTVdZUzSTBNemN0YWiIsLTE3Mjk0MzYwMjFdfQ==", "limit": 25}, "sort": "-@detection_changed_at"}}}
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Test a rule returns "Bad Request" response
    Given new "TestSecurityMonitoringRule" request
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Test a rule returns "Not Found" response
    Given new "TestSecurityMonitoringRule" request
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Test a rule returns "OK" response
    Given new "TestSecurityMonitoringRule" request
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Test an existing rule returns "Bad Request" response
    Given new "TestExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Test an existing rule returns "Not Found" response
    Given new "TestExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Test an existing rule returns "OK" response
    Given new "TestExistingSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"rule": {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "log_detection"}, "ruleQueryPayloads": [{"expectedResult": true, "index": 0, "payload": {"ddsource": "nginx", "ddtags": "env:staging,version:5.1", "hostname": "i-012345678", "message": "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World", "service": "payment"}}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a critical asset returns "Bad Request" response
    Given new "UpdateSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:log_detection source:cloudtrail", "severity": "increase", "tags": ["technique:T1110-brute-force", "source:cloudtrail"], "version": 1}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a critical asset returns "Concurrent Modification" response
    Given new "UpdateSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:log_detection source:cloudtrail", "severity": "increase", "tags": ["technique:T1110-brute-force", "source:cloudtrail"], "version": 1}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a critical asset returns "Not Found" response
    Given new "UpdateSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:log_detection source:cloudtrail", "severity": "increase", "tags": ["technique:T1110-brute-force", "source:cloudtrail"], "version": 1}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a critical asset returns "OK" response
    Given new "UpdateSecurityMonitoringCriticalAsset" request
    And request contains "critical_asset_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "query": "security:monitoring", "rule_query": "type:log_detection source:cloudtrail", "severity": "increase", "tags": ["technique:T1110-brute-force", "source:cloudtrail"], "version": 1}, "type": "critical_assets"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a custom framework returns "Bad Request" response
    Given new "UpdateCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"handle": "sec2", "name": "security-framework", "requirements": [{"controls": [{"name": "A1.2", "rules_id": ["[\"def-000-abc\"]"]}], "name": "criteria"}], "version": "2"}, "type": "custom_framework"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a custom framework returns "OK" response
    Given new "UpdateCustomFramework" request
    And request contains "handle" parameter from "REPLACE.ME"
    And request contains "version" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"handle": "sec2", "name": "security-framework", "requirements": [{"controls": [{"name": "A1.2", "rules_id": ["[\"def-000-abc\"]"]}], "name": "criteria"}], "version": "2"}, "type": "custom_framework"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a security filter returns "Bad Request" response
    Given new "UpdateSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"exclusion_filters": [], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api", "version": 1}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a security filter returns "Concurrent Modification" response
    Given new "UpdateSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"exclusion_filters": [], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api", "version": 1}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a security filter returns "Not Found" response
    Given new "UpdateSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"exclusion_filters": [], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api", "version": 1}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a security filter returns "OK" response
    Given new "UpdateSecurityFilter" request
    And request contains "security_filter_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"exclusion_filters": [], "filtered_data_type": "logs", "is_enabled": true, "name": "Custom security filter", "query": "service:api", "version": 1}, "type": "security_filters"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a suppression rule returns "Bad Request" response
    Given new "UpdateSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a suppression rule returns "Concurrent Modification" response
    Given new "UpdateSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a suppression rule returns "Not Found" response
    Given new "UpdateSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a suppression rule returns "OK" response
    Given new "UpdateSecurityMonitoringSuppression" request
    And request contains "suppression_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an existing rule returns "Bad Request" response
    Given new "UpdateSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "customStatus": "critical", "notifications": [], "status": "critical"}], "complianceSignalOptions": {"defaultActivationStatus": null, "defaultGroupByFields": [], "userActivationStatus": null, "userGroupByFields": []}, "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "customQueryExtension": "a > 3", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "indexes": [], "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": [], "thirdPartyCases": [], "version": 1}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an existing rule returns "Not Found" response
    Given new "UpdateSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "customStatus": "critical", "notifications": [], "status": "critical"}], "complianceSignalOptions": {"defaultActivationStatus": null, "defaultGroupByFields": [], "userActivationStatus": null, "userGroupByFields": []}, "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "customQueryExtension": "a > 3", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "indexes": [], "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": [], "thirdPartyCases": [], "version": 1}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an existing rule returns "OK" response
    Given new "UpdateSecurityMonitoringRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [{"actions": [{"options": {"duration": 0, "flaggedIPType": "FLAGGED"}, "type": "block_ip"}], "customStatus": "critical", "notifications": [], "status": "critical"}], "complianceSignalOptions": {"defaultActivationStatus": null, "defaultGroupByFields": [], "userActivationStatus": null, "userGroupByFields": []}, "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [{"aggregation": "count", "customQueryExtension": "a > 3", "dataSource": "logs", "distinctFields": [], "groupByFields": [], "hasOptionalGroupByFields": false, "indexes": [], "metrics": [], "query": "a > 3"}], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": [], "thirdPartyCases": [], "version": 1}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update resource filters returns "Bad Request" response
    Given new "UpdateResourceEvaluationFilters" request
    And body with value {"data": {"attributes": {"aws": {"123456789": ["environment:production", "team:devops"]}, "azure": {"sub-001": ["app:frontend"]}, "gcp": {"project-abc": ["region:us-central1"]}}, "id": "csm_resource_filter", "type": "csm_resource_filter"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update resource filters returns "OK" response
    Given new "UpdateResourceEvaluationFilters" request
    And body with value {"data": {"attributes": {"aws": {"123456789": ["environment:production", "team:devops"]}, "azure": {"sub-001": ["app:frontend"]}, "gcp": {"project-abc": ["region:us-central1"]}}, "id": "csm_resource_filter", "type": "csm_resource_filter"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Validate a detection rule returns "Bad Request" response
    Given new "ValidateSecurityMonitoringRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Validate a detection rule returns "OK" response
    Given new "ValidateSecurityMonitoringRule" request
    And body with value {"calculatedFields": [{"expression": "@request_end_timestamp - @request_start_timestamp", "name": "response_time"}], "cases": [], "filters": [{"action": "require"}], "groupSignalsBy": ["service"], "hasExtendedTitle": true, "isEnabled": true, "message": "", "name": "My security monitoring rule.", "options": {"anomalyDetectionOptions": {"bucketDuration": 300, "detectionTolerance": 5, "instantaneousBaseline": false, "learningDuration": 1}, "complianceRuleOptions": {"regoRule": {"policy": "package datadog\n\nimport data.datadog.output as dd_output\nimport future.keywords.contains\nimport future.keywords.if\nimport future.keywords.in\n\neval(resource) = \"skip\" if {\n  # Logic that evaluates to true if the resource should be skipped\n  true\n} else = \"pass\" {\n  # Logic that evaluates to true if the resource is compliant\n  true\n} else = \"fail\" {\n  # Logic that evaluates to true if the resource is not compliant\n  true\n}\n\n# This part remains unchanged for all rules\nresults contains result if {\n  some resource in input.resources[input.main_resource_type]\n  result := dd_output.format(resource, eval(resource))\n}", "resourceTypes": ["gcp_iam_service_account", "gcp_iam_policy"]}, "resourceType": "aws_acm"}, "decreaseCriticalityBasedOnEnv": false, "detectionMethod": "threshold", "evaluationWindow": 0, "hardcodedEvaluatorType": "log4shell", "impossibleTravelOptions": {"baselineUserLocations": true}, "keepAlive": 0, "maxSignalDuration": 0, "newValueOptions": {"forgetAfter": 1, "instantaneousBaseline": false, "learningDuration": 0, "learningMethod": "duration", "learningThreshold": 0}, "sequenceDetectionOptions": {"stepTransitions": [{"evaluationWindow": 0}], "steps": [{"evaluationWindow": 0}]}, "thirdPartyRuleOptions": {"defaultNotifications": [], "defaultStatus": "critical", "rootQueries": [{"groupByFields": [], "query": "source:cloudtrail"}]}}, "queries": [], "referenceTables": [{}], "schedulingOptions": {"rrule": "FREQ=HOURLY;INTERVAL=1;", "start": "2025-07-14T12:00:00", "timezone": "America/New_York"}, "tags": ["env:prod", "team:security"], "thirdPartyCases": [], "type": "api_security"}
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Validate a suppression rule returns "Bad Request" response
    Given new "ValidateSecurityMonitoringSuppression" request
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Validate a suppression rule returns "OK" response
    Given new "ValidateSecurityMonitoringSuppression" request
    And body with value {"data": {"attributes": {"data_exclusion_query": "source:cloudtrail account_id:12345", "description": "This rule suppresses low-severity signals in staging environments.", "enabled": true, "expiration_date": 1703187336000, "name": "Custom suppression", "rule_query": "type:log_detection source:cloudtrail", "start_date": 1703187336000, "suppression_query": "env:staging status:low", "tags": ["technique:T1110-brute-force", "source:cloudtrail"]}, "type": "suppressions"}}
    When the request is sent
    Then the response status is 204 OK
