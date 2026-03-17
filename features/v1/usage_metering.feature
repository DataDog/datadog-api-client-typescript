@endpoint(usage-metering) @endpoint(usage-metering-v1)
Feature: Usage Metering
  The usage metering API allows you to get hourly, daily, and monthly usage
  across multiple facets of Datadog. This API is available to all Pro and
  Enterprise customers.  **Note**: Usage data is delayed by up to 72 hours
  from when it was incurred. It is retained for 15 months.  You can retrieve
  up to 24 hours of hourly usage data for multiple organizations, and up to
  two months of hourly usage data for a single organization in one request.
  Learn more on the [usage details documentation](https://docs.datadoghq.com
  /account_management/billing/usage_details/).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "UsageMetering" API

  @generated @skip
  Scenario: Get all custom metrics by hourly average returns "Bad Request" response
    Given new "GetUsageTopAvgMetrics" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all custom metrics by hourly average returns "OK" response
    Given new "GetUsageTopAvgMetrics" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get billable usage across your account returns "Bad Request" response
    Given new "GetUsageBillableSummary" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get billable usage across your account returns "OK" response
    Given new "GetUsageBillableSummary" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly logs usage by retention returns "Bad Request" response
    Given new "GetUsageLogsByRetention" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly logs usage by retention returns "OK" response
    Given new "GetUsageLogsByRetention" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage attribution returns "OK" response
    Given new "GetHourlyUsageAttribution" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    And request contains "usage_type" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for CI visibility returns "Bad Request" response
    Given new "GetUsageCIApp" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for CI visibility returns "OK" response
    Given new "GetUsageCIApp" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for CSM Pro returns "Bad Request" response
    Given new "GetUsageCloudSecurityPostureManagement" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for CSM Pro returns "OK" response
    Given new "GetUsageCloudSecurityPostureManagement" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for Fargate returns "Bad Request" response
    Given new "GetUsageFargate" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for Fargate returns "OK" response
    Given new "GetUsageFargate" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for IoT returns "Bad Request" response
    Given new "GetUsageInternetOfThings" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for IoT returns "OK" response
    Given new "GetUsageInternetOfThings" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for Lambda returns "Bad Request" response
    Given new "GetUsageLambda" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for Lambda returns "OK" response
    Given new "GetUsageLambda" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for RUM sessions returns "Bad Request" response
    Given new "GetUsageRumSessions" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for RUM sessions returns "OK" response
    Given new "GetUsageRumSessions" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for RUM units returns "Bad Request" response
    Given new "GetUsageRumUnits" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for RUM units returns "OK" response
    Given new "GetUsageRumUnits" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for SNMP devices returns "Bad Request" response
    Given new "GetUsageSNMP" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for SNMP devices returns "OK" response
    Given new "GetUsageSNMP" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for analyzed logs returns "Bad Request" response
    Given new "GetUsageAnalyzedLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for analyzed logs returns "OK" response
    Given new "GetUsageAnalyzedLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for audit logs returns "Bad Request" response
    Given new "GetUsageAuditLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for audit logs returns "OK" response
    Given new "GetUsageAuditLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for cloud workload security returns "Bad Request" response
    Given new "GetUsageCWS" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for cloud workload security returns "OK" response
    Given new "GetUsageCWS" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for custom metrics returns "Bad Request" response
    Given new "GetUsageTimeseries" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for custom metrics returns "OK" response
    Given new "GetUsageTimeseries" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for database monitoring returns "Bad Request" response
    Given new "GetUsageDBM" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for database monitoring returns "OK" response
    Given new "GetUsageDBM" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for hosts and containers returns "Bad Request" response
    Given new "GetUsageHosts" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for hosts and containers returns "OK" response
    Given new "GetUsageHosts" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for incident management returns "Bad Request" response
    Given new "GetIncidentManagement" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for incident management returns "OK" response
    Given new "GetIncidentManagement" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for indexed spans returns "Bad Request" response
    Given new "GetUsageIndexedSpans" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for indexed spans returns "OK" response
    Given new "GetUsageIndexedSpans" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for ingested spans returns "Bad Request" response
    Given new "GetIngestedSpans" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for ingested spans returns "OK" response
    Given new "GetIngestedSpans" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for logs by index returns "Bad Request" response
    Given new "GetUsageLogsByIndex" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for logs by index returns "OK" response
    Given new "GetUsageLogsByIndex" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for logs returns "Bad Request" response
    Given new "GetUsageLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for logs returns "OK" response
    Given new "GetUsageLogs" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for network hosts returns "Bad Request" response
    Given new "GetUsageNetworkHosts" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for network hosts returns "OK" response
    Given new "GetUsageNetworkHosts" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for online archive returns "Bad Request" response
    Given new "GetUsageOnlineArchive" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for online archive returns "OK" response
    Given new "GetUsageOnlineArchive" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for profiled hosts returns "Bad Request" response
    Given new "GetUsageProfiling" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for profiled hosts returns "OK" response
    Given new "GetUsageProfiling" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for sensitive data scanner returns "Bad Request" response
    Given new "GetUsageSDS" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for sensitive data scanner returns "OK" response
    Given new "GetUsageSDS" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for synthetics API checks returns "Bad Request" response
    Given new "GetUsageSyntheticsAPI" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for synthetics API checks returns "OK" response
    Given new "GetUsageSyntheticsAPI" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for synthetics browser checks returns "Bad Request" response
    Given new "GetUsageSyntheticsBrowser" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for synthetics browser checks returns "OK" response
    Given new "GetUsageSyntheticsBrowser" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get hourly usage for synthetics checks returns "Bad Request" response
    Given new "GetUsageSynthetics" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get hourly usage for synthetics checks returns "OK" response
    Given new "GetUsageSynthetics" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get monthly usage attribution returns "OK" response
    Given new "GetMonthlyUsageAttribution" request
    And request contains "start_month" parameter from "REPLACE.ME"
    And request contains "fields" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get specified daily custom reports returns "Not Found" response
    Given new "GetSpecifiedDailyCustomReports" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get specified daily custom reports returns "OK" response
    Given new "GetSpecifiedDailyCustomReports" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get specified monthly custom reports returns "Bad Request" response
    Given new "GetSpecifiedMonthlyCustomReports" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get specified monthly custom reports returns "Not Found" response
    Given new "GetSpecifiedMonthlyCustomReports" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get specified monthly custom reports returns "OK" response
    Given new "GetSpecifiedMonthlyCustomReports" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of available daily custom reports returns "OK" response
    Given new "GetDailyCustomReports" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of available monthly custom reports returns "OK" response
    Given new "GetMonthlyCustomReports" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get usage across your account returns "Bad Request" response
    Given new "GetUsageSummary" request
    And request contains "start_month" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get usage across your account returns "OK" response
    Given new "GetUsageSummary" request
    And request contains "start_month" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: get hourly usage for network flows returns "Bad Request" response
    Given new "GetUsageNetworkFlows" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: get hourly usage for network flows returns "OK" response
    Given new "GetUsageNetworkFlows" request
    And request contains "start_hr" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK
