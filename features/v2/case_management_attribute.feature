@endpoint(case-management-attribute) @endpoint(case-management-attribute-v2)
Feature: Case Management Attribute
  View and configure custom attributes within Case Management. See the [Case
  Management
  page](https://docs.datadoghq.com/service_management/case_management/) for
  more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CaseManagementAttribute" API

  @generated @skip
  Scenario: Create custom attribute config for a case type returns "Bad Request" response
    Given new "CreateCustomAttributeConfig" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "AWS Region, must be a valid region supported by AWS", "display_name": "AWS Region", "is_multi": true, "key": "aws_region", "type": "NUMBER"}, "type": "custom_attribute"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create custom attribute config for a case type returns "CREATED" response
    Given new "CreateCustomAttributeConfig" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "AWS Region, must be a valid region supported by AWS", "display_name": "AWS Region", "is_multi": true, "key": "aws_region", "type": "NUMBER"}, "type": "custom_attribute"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create custom attribute config for a case type returns "Not Found" response
    Given new "CreateCustomAttributeConfig" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "AWS Region, must be a valid region supported by AWS", "display_name": "AWS Region", "is_multi": true, "key": "aws_region", "type": "NUMBER"}, "type": "custom_attribute"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete custom attributes config returns "Bad Request" response
    Given new "DeleteCustomAttributeConfig" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete custom attributes config returns "No Content" response
    Given new "DeleteCustomAttributeConfig" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get all custom attributes config of case type returns "Bad Request" response
    Given new "GetAllCustomAttributeConfigsByCaseType" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all custom attributes config of case type returns "OK" response
    Given new "GetAllCustomAttributeConfigsByCaseType" request
    And request contains "case_type_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all custom attributes returns "OK" response
    Given new "GetAllCustomAttributes" request
    When the request is sent
    Then the response status is 200 OK
