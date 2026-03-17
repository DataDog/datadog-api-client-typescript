@endpoint(incident-services) @endpoint(incident-services-v2)
Feature: Incident Services
  Create, update, delete, and retrieve services which can be associated with
  incidents. See the [Incident Management
  page](https://docs.datadoghq.com/service_management/incident_management/)
  for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "IncidentServices" API

  @generated @skip
  Scenario: Create a new incident service returns "Bad Request" response
    Given operation "CreateIncidentService" enabled
    And new "CreateIncidentService" request
    And body with value {"data": {"attributes": {"name": "an example service name"}, "type": "services"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new incident service returns "CREATED" response
    Given operation "CreateIncidentService" enabled
    And new "CreateIncidentService" request
    And body with value {"data": {"attributes": {"name": "an example service name"}, "type": "services"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create a new incident service returns "Not Found" response
    Given operation "CreateIncidentService" enabled
    And new "CreateIncidentService" request
    And body with value {"data": {"attributes": {"name": "an example service name"}, "type": "services"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an existing incident service returns "Bad Request" response
    Given operation "DeleteIncidentService" enabled
    And new "DeleteIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an existing incident service returns "Not Found" response
    Given operation "DeleteIncidentService" enabled
    And new "DeleteIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an existing incident service returns "OK" response
    Given operation "DeleteIncidentService" enabled
    And new "DeleteIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a list of all incident services returns "Bad Request" response
    Given operation "ListIncidentServices" enabled
    And new "ListIncidentServices" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of all incident services returns "Not Found" response
    Given operation "ListIncidentServices" enabled
    And new "ListIncidentServices" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a list of all incident services returns "OK" response
    Given operation "ListIncidentServices" enabled
    And new "ListIncidentServices" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get details of an incident service returns "Bad Request" response
    Given operation "GetIncidentService" enabled
    And new "GetIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get details of an incident service returns "Not Found" response
    Given operation "GetIncidentService" enabled
    And new "GetIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get details of an incident service returns "OK" response
    Given operation "GetIncidentService" enabled
    And new "GetIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an existing incident service returns "Bad Request" response
    Given operation "UpdateIncidentService" enabled
    And new "UpdateIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "an example service name"}, "id": "00000000-0000-0000-0000-000000000000", "type": "services"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an existing incident service returns "Not Found" response
    Given operation "UpdateIncidentService" enabled
    And new "UpdateIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "an example service name"}, "id": "00000000-0000-0000-0000-000000000000", "type": "services"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an existing incident service returns "OK" response
    Given operation "UpdateIncidentService" enabled
    And new "UpdateIncidentService" request
    And request contains "service_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "an example service name"}, "id": "00000000-0000-0000-0000-000000000000", "type": "services"}}
    When the request is sent
    Then the response status is 200 OK
