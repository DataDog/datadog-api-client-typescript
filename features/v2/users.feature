@endpoint(users) @endpoint(users-v2)
Feature: Users
  Create, edit, and disable users.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Users" API

  @generated @skip
  Scenario: Create a user returns "Bad Request" response
    Given new "CreateUser" request
    And body with value {"data": {"attributes": {"email": "jane.doe@example.com"}, "relationships": {"roles": {"data": [{"id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "type": "roles"}]}}, "type": "users"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a user returns "OK" response
    Given new "CreateUser" request
    And body with value {"data": {"attributes": {"email": "jane.doe@example.com"}, "relationships": {"roles": {"data": [{"id": "3653d3c6-0c75-11ea-ad28-fb5701eabc7d", "type": "roles"}]}}, "type": "users"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Disable a user returns "Not found" response
    Given new "DisableUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Disable a user returns "OK" response
    Given new "DisableUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a user invitation returns "Not found" response
    Given new "GetInvitation" request
    And request contains "user_invitation_uuid" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get a user invitation returns "OK" response
    Given new "GetInvitation" request
    And request contains "user_invitation_uuid" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a user organization returns "Not found" response
    Given new "ListUserOrganizations" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get a user organization returns "OK" response
    Given new "ListUserOrganizations" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a user permissions returns "Not found" response
    Given new "ListUserPermissions" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get a user permissions returns "OK" response
    Given new "ListUserPermissions" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get user details returns "Not found" response
    Given new "GetUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get user details returns "OK" response
    Given new "GetUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List all users returns "Bad Request" response
    Given new "ListUsers" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List all users returns "OK" response
    Given new "ListUsers" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List all users returns "OK" response with pagination
    Given new "ListUsers" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Send invitation emails returns "Bad Request" response
    Given new "SendInvitations" request
    And body with value {"data": []}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Send invitation emails returns "OK" response
    Given new "SendInvitations" request
    And body with value {"data": []}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Update a user returns "Bad Request" response
    Given new "UpdateUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "id": "00000000-0000-feed-0000-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a user returns "Not found" response
    Given new "UpdateUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "id": "00000000-0000-feed-0000-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Update a user returns "OK" response
    Given new "UpdateUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "id": "00000000-0000-feed-0000-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a user returns "Unprocessable Entity" response
    Given new "UpdateUser" request
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "id": "00000000-0000-feed-0000-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity
