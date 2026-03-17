@endpoint(service-level-objectives) @endpoint(service-level-objectives-v2)
Feature: Service Level Objectives
  [Service Level Objectives](https://docs.datadoghq.com/monitors/service_lev
  el_objectives/#configuration) (SLOs) are a key part of the site
  reliability engineering toolkit. SLOs provide a framework for defining
  clear targets around application performance, which ultimately help teams
  provide a consistent customer experience, balance feature development with
  platform stability, and improve communication with internal and external
  users.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceLevelObjectives" API

  @generated @skip
  Scenario: Create a new SLO report returns "Bad Request" response
    Given operation "CreateSLOReportJob" enabled
    And new "CreateSLOReportJob" request
    And body with value {"data": {"attributes": {"from_ts": 1690901870, "interval": "weekly", "query": "slo_type:metric", "timezone": "America/New_York", "to_ts": 1706803070}}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new SLO report returns "OK" response
    Given operation "CreateSLOReportJob" enabled
    And new "CreateSLOReportJob" request
    And body with value {"data": {"attributes": {"from_ts": 1690901870, "interval": "weekly", "query": "slo_type:metric", "timezone": "America/New_York", "to_ts": 1706803070}}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get SLO report returns "Bad Request" response
    Given operation "GetSLOReport" enabled
    And new "GetSLOReport" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get SLO report returns "Not Found" response
    Given operation "GetSLOReport" enabled
    And new "GetSLOReport" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get SLO report returns "OK" response
    Given operation "GetSLOReport" enabled
    And new "GetSLOReport" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get SLO report status returns "Bad Request" response
    Given operation "GetSLOReportJobStatus" enabled
    And new "GetSLOReportJobStatus" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get SLO report status returns "Not Found" response
    Given operation "GetSLOReportJobStatus" enabled
    And new "GetSLOReportJobStatus" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get SLO report status returns "OK" response
    Given operation "GetSLOReportJobStatus" enabled
    And new "GetSLOReportJobStatus" request
    And request contains "report_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get SLO status returns "Bad Request" response
    Given operation "GetSloStatus" enabled
    And new "GetSloStatus" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get SLO status returns "Not Found" response
    Given operation "GetSloStatus" enabled
    And new "GetSloStatus" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get SLO status returns "OK" response
    Given operation "GetSloStatus" enabled
    And new "GetSloStatus" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK
