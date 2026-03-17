@endpoint(roles) @endpoint(roles-v2)
Feature: Roles
  The Roles API is used to create and manage Datadog roles, what [global
  permissions](https://docs.datadoghq.com/account_management/rbac/) they
  grant, and which users belong to them.  Permissions related to specific
  account assets can be granted to roles in the Datadog application without
  using this API. For example, granting read access on a specific log index
  to a role can be done in Datadog from the [Pipelines
  page](https://app.datadoghq.com/logs/pipelines).  Roles can also be
  managed in bulk through the Datadog UI, which provides the capability to
  assign a single permission to multiple roles simultaneously.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Roles" API

  @generated @skip
  Scenario: Add a user to a role returns "Bad Request" response
    Given new "AddUserToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Add a user to a role returns "Not found" response
    Given new "AddUserToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Add a user to a role returns "OK" response
    Given new "AddUserToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a new role by cloning an existing role returns "Bad Request" response
    Given new "CloneRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "cloned-role", "receives_permissions_from": []}, "type": "roles"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new role by cloning an existing role returns "Conflict" response
    Given new "CloneRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "cloned-role", "receives_permissions_from": []}, "type": "roles"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a new role by cloning an existing role returns "Not found" response
    Given new "CloneRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "cloned-role", "receives_permissions_from": []}, "type": "roles"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Create a new role by cloning an existing role returns "OK" response
    Given new "CloneRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "cloned-role", "receives_permissions_from": []}, "type": "roles"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create role returns "Bad Request" response
    Given new "CreateRole" request
    And body with value {"data": {"attributes": {"name": "developers", "receives_permissions_from": []}, "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create role returns "OK" response
    Given new "CreateRole" request
    And body with value {"data": {"attributes": {"name": "developers", "receives_permissions_from": []}, "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete role returns "Not found" response
    Given new "DeleteRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete role returns "OK" response
    Given new "DeleteRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a role returns "Not found" response
    Given new "GetRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get a role returns "OK" response
    Given new "GetRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all users of a role returns "Not found" response
    Given new "ListRoleUsers" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get all users of a role returns "OK" response
    Given new "ListRoleUsers" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Grant permission to a role returns "Bad Request" response
    Given new "AddPermissionToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Grant permission to a role returns "Not found" response
    Given new "AddPermissionToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Grant permission to a role returns "OK" response
    Given new "AddPermissionToRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List permissions for a role returns "Not found" response
    Given new "ListRolePermissions" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: List permissions for a role returns "OK" response
    Given new "ListRolePermissions" request
    And request contains "role_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List permissions returns "Bad Request" response
    Given new "ListPermissions" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List permissions returns "OK" response
    Given new "ListPermissions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List role templates returns "OK" response
    Given operation "ListRoleTemplates" enabled
    And new "ListRoleTemplates" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List roles returns "OK" response
    Given new "ListRoles" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Remove a user from a role returns "Bad Request" response
    Given new "RemoveUserFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Remove a user from a role returns "Not found" response
    Given new "RemoveUserFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Remove a user from a role returns "OK" response
    Given new "RemoveUserFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Revoke permission returns "Bad Request" response
    Given new "RemovePermissionFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Revoke permission returns "Not found" response
    Given new "RemovePermissionFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Revoke permission returns "OK" response
    Given new "RemovePermissionFromRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "permissions"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a role returns "Bad Request" response
    Given new "UpdateRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"receives_permissions_from": []}, "id": "00000000-0000-1111-0000-000000000000", "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a role returns "Not found" response
    Given new "UpdateRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"receives_permissions_from": []}, "id": "00000000-0000-1111-0000-000000000000", "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Update a role returns "OK" response
    Given new "UpdateRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"receives_permissions_from": []}, "id": "00000000-0000-1111-0000-000000000000", "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a role returns "Unprocessable Entity" response
    Given new "UpdateRole" request
    And request contains "role_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"receives_permissions_from": []}, "id": "00000000-0000-1111-0000-000000000000", "relationships": {"permissions": {"data": [{"type": "permissions"}]}}, "type": "roles"}}
    When the request is sent
    Then the response status is 422 Unprocessable Entity
