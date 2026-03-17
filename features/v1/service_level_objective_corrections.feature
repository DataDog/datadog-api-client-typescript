@endpoint(service-level-objective-corrections) @endpoint(service-level-objective-corrections-v1)
Feature: Service Level Objective Corrections
  SLO Status Corrections allow you to prevent specific time periods from
  negatively impacting your SLO’s status and error budget. You can use
  Status Corrections for various purposes, such as removing planned
  maintenance windows, non-business hours, or other time periods that do not
  correspond to genuine issues. See [SLO status corrections](https://docs.da
  tadoghq.com/service_management/service_level_objectives/#slo-status-
  corrections) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceLevelObjectiveCorrections" API

  @generated @skip
  Scenario: Create an SLO correction returns "Bad Request" response
    Given new "CreateSLOCorrection" request
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 1600000000, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "slo_id": "sloId", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an SLO correction returns "OK" response
    Given new "CreateSLOCorrection" request
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 1600000000, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "slo_id": "sloId", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create an SLO correction returns "SLO Not Found" response
    Given new "CreateSLOCorrection" request
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 1600000000, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "slo_id": "sloId", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 404 SLO Not Found

  @generated @skip
  Scenario: Delete an SLO correction returns "Not found" response
    Given new "DeleteSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete an SLO correction returns "OK" response
    Given new "DeleteSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get all SLO corrections returns "OK" response
    Given new "ListSLOCorrection" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all SLO corrections returns "OK" response with pagination
    Given new "ListSLOCorrection" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an SLO correction for an SLO returns "Bad Request" response
    Given new "GetSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an SLO correction for an SLO returns "OK" response
    Given new "GetSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an SLO correction returns "Bad Request" response
    Given new "UpdateSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 3600, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an SLO correction returns "Not Found" response
    Given new "UpdateSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 3600, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an SLO correction returns "OK" response
    Given new "UpdateSLOCorrection" request
    And request contains "slo_correction_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"category": "Scheduled Maintenance", "duration": 3600, "end": 1600000000, "rrule": "FREQ=DAILY;INTERVAL=10;COUNT=5", "start": 1600000000, "timezone": "UTC"}, "type": "correction"}}
    When the request is sent
    Then the response status is 200 OK
