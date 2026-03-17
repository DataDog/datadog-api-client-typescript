@endpoint(seats) @endpoint(seats-v2)
Feature: Seats
  The seats API allows you to view, assign, and unassign seats for your
  organization.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Seats" API

  @generated @skip
  Scenario: Assign seats to users returns "Bad Request" response
    Given new "AssignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Assign seats to users returns "Created" response
    Given new "AssignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Assign seats to users returns "Unprocessable Entity" response
    Given new "AssignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity

  @generated @skip
  Scenario: Get users with seats returns "Bad Request" response
    Given new "GetSeatsUsers" request
    And request contains "product_code" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get users with seats returns "OK" response
    Given new "GetSeatsUsers" request
    And request contains "product_code" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get users with seats returns "Unprocessable Entity" response
    Given new "GetSeatsUsers" request
    And request contains "product_code" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 422 Unprocessable Entity

  @generated @skip
  Scenario: Unassign seats from users returns "Bad Request" response
    Given new "UnassignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Unassign seats from users returns "No Content" response
    Given new "UnassignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Unassign seats from users returns "Unprocessable Entity" response
    Given new "UnassignSeatsUser" request
    And body with value {"data": {"attributes": {"product_code": "", "user_uuids": [""]}, "type": "seat-assignments"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity
