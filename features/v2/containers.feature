@endpoint(containers) @endpoint(containers-v2)
Feature: Containers
  The Containers API allows you to query container data for your
  organization. See the [Container Monitoring
  page](https://docs.datadoghq.com/containers/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Containers" API
    And new "ListContainers" request

  @generated @skip
  Scenario: Get All Containers returns "Bad Request" response
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get All Containers returns "OK" response
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get All Containers returns "OK" response with pagination
    When the request with pagination is sent
    Then the response status is 200 OK
