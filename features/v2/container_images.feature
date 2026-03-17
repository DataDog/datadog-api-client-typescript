@endpoint(container-images) @endpoint(container-images-v2)
Feature: Container Images
  The Container Images API allows you to query Container Image data for your
  organization. See the [Container Images View page](https://docs.datadoghq.
  com/infrastructure/containers/container_images/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ContainerImages" API
    And new "ListContainerImages" request

  @generated @skip
  Scenario: Get all Container Images returns "Bad Request" response
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all Container Images returns "OK" response
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all Container Images returns "OK" response with pagination
    When the request with pagination is sent
    Then the response status is 200 OK
