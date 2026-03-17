@endpoint(processes) @endpoint(processes-v2)
Feature: Processes
  The processes API allows you to query processes data for your
  organization. See the [Live Processes
  page](https://docs.datadoghq.com/infrastructure/process/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Processes" API
    And new "ListProcesses" request

  @generated @skip
  Scenario: Get all processes returns "Bad Request" response
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all processes returns "OK" response
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all processes returns "OK" response with pagination
    When the request with pagination is sent
    Then the response status is 200 OK
