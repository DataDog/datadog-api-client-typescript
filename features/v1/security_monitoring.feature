@endpoint(security-monitoring) @endpoint(security-monitoring-v1)
Feature: Security Monitoring
  Create and manage your security rules, signals, filters, and more. See the
  [Datadog Security page](https://docs.datadoghq.com/security/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "SecurityMonitoring" API

  @generated @skip
  Scenario: Add a security signal to an incident returns "Bad Request" response
    Given new "AddSecurityMonitoringSignalToIncident" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"incident_id": 2066, "version": 0}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add a security signal to an incident returns "Not Found" response
    Given new "AddSecurityMonitoringSignalToIncident" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"incident_id": 2066, "version": 0}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Add a security signal to an incident returns "OK" response
    Given new "AddSecurityMonitoringSignalToIncident" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"incident_id": 2066, "version": 0}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Change the triage state of a security signal returns "Bad Request" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"archiveReason": "none", "state": "open", "version": 0}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Change the triage state of a security signal returns "Not Found" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"archiveReason": "none", "state": "open", "version": 0}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Change the triage state of a security signal returns "OK" response
    Given new "EditSecurityMonitoringSignalState" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"archiveReason": "none", "state": "open", "version": 0}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "Bad Request" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"assignee": "773b045d-ccf8-4808-bd3b-955ef6a8c940", "version": 0}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "Not Found" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"assignee": "773b045d-ccf8-4808-bd3b-955ef6a8c940", "version": 0}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Modify the triage assignee of a security signal returns "OK" response
    Given new "EditSecurityMonitoringSignalAssignee" request
    And request contains "signal_id" parameter from "REPLACE.ME"
    And body with value {"assignee": "773b045d-ccf8-4808-bd3b-955ef6a8c940", "version": 0}
    When the request is sent
    Then the response status is 200 OK
