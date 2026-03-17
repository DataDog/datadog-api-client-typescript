@endpoint(powerpack) @endpoint(powerpack-v2)
Feature: Powerpack
  The Powerpack endpoints allow you to:  - Get a Powerpack - Create a
  Powerpack - Delete a Powerpack - Get a list of all Powerpacks  The Patch
  and Delete API methods can only be performed on a Powerpack by a user who
  has the powerpack create permission for that specific Powerpack.  Read
  [Scale Graphing Expertise with
  Powerpacks](https://docs.datadoghq.com/dashboards/guide/powerpacks-best-
  practices/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Powerpack" API

  @generated @skip
  Scenario: Create a new powerpack returns "Bad Request" response
    Given new "CreatePowerpack" request
    And body with value {"data": {"attributes": {"description": "Powerpack for ABC", "group_widget": {"definition": {"layout_type": "ordered", "show_title": true, "title": "Sample Powerpack", "type": "group", "widgets": [{"definition": {"content": "example", "type": "note"}, "layout": {"height": 5, "width": 10, "x": 0, "y": 0}}]}, "layout": {"height": 0, "width": 0, "x": 0, "y": 0}, "live_span": "5m"}, "name": "Sample Powerpack", "tags": ["tag:foo1"], "template_variables": [{"defaults": ["*"], "name": "test"}]}, "relationships": {"author": {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}}, "type": "powerpack"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new powerpack returns "OK" response
    Given new "CreatePowerpack" request
    And body with value {"data": {"attributes": {"description": "Powerpack for ABC", "group_widget": {"definition": {"layout_type": "ordered", "show_title": true, "title": "Sample Powerpack", "type": "group", "widgets": [{"definition": {"content": "example", "type": "note"}, "layout": {"height": 5, "width": 10, "x": 0, "y": 0}}]}, "layout": {"height": 0, "width": 0, "x": 0, "y": 0}, "live_span": "5m"}, "name": "Sample Powerpack", "tags": ["tag:foo1"], "template_variables": [{"defaults": ["*"], "name": "test"}]}, "relationships": {"author": {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}}, "type": "powerpack"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a powerpack returns "OK" response
    Given new "DeletePowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a powerpack returns "Powerpack Not Found" response
    Given new "DeletePowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Powerpack Not Found

  @generated @skip
  Scenario: Get a Powerpack returns "OK" response
    Given new "GetPowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a Powerpack returns "Powerpack Not Found." response
    Given new "GetPowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Powerpack Not Found.

  @generated @skip
  Scenario: Get all powerpacks returns "OK" response
    Given new "ListPowerpacks" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all powerpacks returns "OK" response with pagination
    Given new "ListPowerpacks" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a powerpack returns "Bad Request" response
    Given new "UpdatePowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Powerpack for ABC", "group_widget": {"definition": {"layout_type": "ordered", "show_title": true, "title": "Sample Powerpack", "type": "group", "widgets": [{"definition": {"content": "example", "type": "note"}, "layout": {"height": 5, "width": 10, "x": 0, "y": 0}}]}, "layout": {"height": 0, "width": 0, "x": 0, "y": 0}, "live_span": "5m"}, "name": "Sample Powerpack", "tags": ["tag:foo1"], "template_variables": [{"defaults": ["*"], "name": "test"}]}, "relationships": {"author": {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}}, "type": "powerpack"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a powerpack returns "OK" response
    Given new "UpdatePowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Powerpack for ABC", "group_widget": {"definition": {"layout_type": "ordered", "show_title": true, "title": "Sample Powerpack", "type": "group", "widgets": [{"definition": {"content": "example", "type": "note"}, "layout": {"height": 5, "width": 10, "x": 0, "y": 0}}]}, "layout": {"height": 0, "width": 0, "x": 0, "y": 0}, "live_span": "5m"}, "name": "Sample Powerpack", "tags": ["tag:foo1"], "template_variables": [{"defaults": ["*"], "name": "test"}]}, "relationships": {"author": {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}}, "type": "powerpack"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a powerpack returns "Powerpack Not Found" response
    Given new "UpdatePowerpack" request
    And request contains "powerpack_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Powerpack for ABC", "group_widget": {"definition": {"layout_type": "ordered", "show_title": true, "title": "Sample Powerpack", "type": "group", "widgets": [{"definition": {"content": "example", "type": "note"}, "layout": {"height": 5, "width": 10, "x": 0, "y": 0}}]}, "layout": {"height": 0, "width": 0, "x": 0, "y": 0}, "live_span": "5m"}, "name": "Sample Powerpack", "tags": ["tag:foo1"], "template_variables": [{"defaults": ["*"], "name": "test"}]}, "relationships": {"author": {"data": {"id": "00000000-0000-0000-2345-000000000000", "type": "users"}}}, "type": "powerpack"}}
    When the request is sent
    Then the response status is 404 Powerpack Not Found
