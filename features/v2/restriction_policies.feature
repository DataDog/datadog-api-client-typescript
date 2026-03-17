@endpoint(restriction-policies) @endpoint(restriction-policies-v2)
Feature: Restriction Policies
  A restriction policy defines the access control rules for a resource,
  mapping a set of relations (such as editor and viewer) to a set of allowed
  principals (such as roles, teams, or users). The restriction policy
  determines who is authorized to perform what actions on the resource.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "RestrictionPolicies" API

  @generated @skip
  Scenario: Delete a restriction policy returns "Bad Request" response
    Given new "DeleteRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a restriction policy returns "No Content" response
    Given new "DeleteRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get a restriction policy returns "Bad Request" response
    Given new "GetRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a restriction policy returns "OK" response
    Given new "GetRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a restriction policy returns "Bad Request" response
    Given new "UpdateRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"bindings": []}, "id": "dashboard:abc-def-ghi", "type": "restriction_policy"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a restriction policy returns "OK" response
    Given new "UpdateRestrictionPolicy" request
    And request contains "resource_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"bindings": []}, "id": "dashboard:abc-def-ghi", "type": "restriction_policy"}}
    When the request is sent
    Then the response status is 200 OK
