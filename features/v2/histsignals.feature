@endpoint(histsignals) @endpoint(histsignals-v2)
Feature: Histsignals
  Histsignals

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Histsignals" API

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a hist signal's details returns "Bad Request" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a hist signal's details returns "Not Found" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a hist signal's details returns "OK" response
    Given operation "GetSecurityMonitoringHistsignal" enabled
    And new "GetSecurityMonitoringHistsignal" request
    And request contains "histsignal_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a job's hist signals returns "Bad Request" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a job's hist signals returns "Not Found" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Get a job's hist signals returns "OK" response
    Given operation "GetSecurityMonitoringHistsignalsByJobId" enabled
    And new "GetSecurityMonitoringHistsignalsByJobId" request
    And request contains "job_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: List hist signals returns "Bad Request" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: List hist signals returns "Not Found" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: List hist signals returns "OK" response
    Given operation "ListSecurityMonitoringHistsignals" enabled
    And new "ListSecurityMonitoringHistsignals" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Search hist signals returns "Bad Request" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Search hist signals returns "Not Found" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip @team:DataDog/k9-cloud-security-platform
  Scenario: Search hist signals returns "OK" response
    Given operation "SearchSecurityMonitoringHistsignals" enabled
    And new "SearchSecurityMonitoringHistsignals" request
    And body with value {"filter": {"from": "2019-01-02T09:42:36.320Z", "query": "security:attack status:high", "to": "2019-01-03T09:42:36.320Z"}, "page": {"cursor": "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==", "limit": 25}, "sort": "timestamp"}
    When the request is sent
    Then the response status is 200 OK
