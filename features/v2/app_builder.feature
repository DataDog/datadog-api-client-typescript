@endpoint(app-builder) @endpoint(app-builder-v2)
Feature: App Builder
  Datadog App Builder provides a low-code solution to rapidly develop and
  integrate secure, customized applications into your monitoring stack that
  are built to accelerate remediation at scale. These API endpoints allow
  you to create, read, update, delete, and publish apps.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "AppBuilder" API

  @generated @skip
  Scenario: Create App returns "Bad Request" response
    Given new "CreateApp" request
    And body with value {"data": {"attributes": {"components": [{"events": [], "name": "grid0", "properties": {"children": [{"events": [], "name": "gridCell0", "properties": {"children": [{"events": [], "name": "calloutValue0", "properties": {"isDisabled": false, "isLoading": false, "isVisible": true, "label": "CPU Usage", "size": "sm", "style": "vivid_yellow", "unit": "kB", "value": "42"}, "type": "calloutValue"}], "isVisible": "true", "layout": {"default": {"height": 8, "width": 2, "x": 0, "y": 0}}}, "type": "gridCell"}]}, "type": "grid"}], "description": "This is a simple example app", "name": "Example App", "queries": [], "rootInstanceName": "grid0"}, "type": "appDefinitions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create App returns "Created" response
    Given new "CreateApp" request
    And body with value {"data": {"attributes": {"components": [{"events": [], "name": "grid0", "properties": {"children": [{"events": [], "name": "gridCell0", "properties": {"children": [{"events": [], "name": "calloutValue0", "properties": {"isDisabled": false, "isLoading": false, "isVisible": true, "label": "CPU Usage", "size": "sm", "style": "vivid_yellow", "unit": "kB", "value": "42"}, "type": "calloutValue"}], "isVisible": "true", "layout": {"default": {"height": 8, "width": 2, "x": 0, "y": 0}}}, "type": "gridCell"}]}, "type": "grid"}], "description": "This is a simple example app", "name": "Example App", "queries": [], "rootInstanceName": "grid0"}, "type": "appDefinitions"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete App returns "Bad Request" response
    Given new "DeleteApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete App returns "Gone" response
    Given new "DeleteApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 410 Gone

  @generated @skip
  Scenario: Delete App returns "Not Found" response
    Given new "DeleteApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete App returns "OK" response
    Given new "DeleteApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete Multiple Apps returns "Bad Request" response
    Given new "DeleteApps" request
    And body with value {"data": [{"id": "aea2ed17-b45f-40d0-ba59-c86b7972c901", "type": "appDefinitions"}, {"id": "f69bb8be-6168-4fe7-a30d-370256b6504a", "type": "appDefinitions"}, {"id": "ab1ed73e-13ad-4426-b0df-a0ff8876a088", "type": "appDefinitions"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Multiple Apps returns "Not Found" response
    Given new "DeleteApps" request
    And body with value {"data": [{"id": "aea2ed17-b45f-40d0-ba59-c86b7972c901", "type": "appDefinitions"}, {"id": "f69bb8be-6168-4fe7-a30d-370256b6504a", "type": "appDefinitions"}, {"id": "ab1ed73e-13ad-4426-b0df-a0ff8876a088", "type": "appDefinitions"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Multiple Apps returns "OK" response
    Given new "DeleteApps" request
    And body with value {"data": [{"id": "aea2ed17-b45f-40d0-ba59-c86b7972c901", "type": "appDefinitions"}, {"id": "f69bb8be-6168-4fe7-a30d-370256b6504a", "type": "appDefinitions"}, {"id": "ab1ed73e-13ad-4426-b0df-a0ff8876a088", "type": "appDefinitions"}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get App returns "Bad Request" response
    Given new "GetApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get App returns "Gone" response
    Given new "GetApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 410 Gone

  @generated @skip
  Scenario: Get App returns "Not Found" response
    Given new "GetApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get App returns "OK" response
    Given new "GetApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Apps returns "Bad Request" response
    Given new "ListApps" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Apps returns "OK" response
    Given new "ListApps" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Publish App returns "Bad Request" response
    Given new "PublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Publish App returns "Created" response
    Given new "PublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Publish App returns "Not Found" response
    Given new "PublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Unpublish App returns "Bad Request" response
    Given new "UnpublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Unpublish App returns "Not Found" response
    Given new "UnpublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Unpublish App returns "OK" response
    Given new "UnpublishApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update App returns "Bad Request" response
    Given new "UpdateApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"components": [{"events": [], "name": "grid0", "properties": {"children": [{"events": [], "name": "gridCell0", "properties": {"children": [{"events": [], "name": "calloutValue0", "properties": {"isDisabled": false, "isLoading": false, "isVisible": true, "label": "CPU Usage", "size": "sm", "style": "vivid_yellow", "unit": "kB", "value": "42"}, "type": "calloutValue"}], "isVisible": "true", "layout": {"default": {"height": 8, "width": 2, "x": 0, "y": 0}}}, "type": "gridCell"}]}, "type": "grid"}], "description": "This is a simple example app", "name": "Example App", "queries": [], "rootInstanceName": "grid0"}, "id": "9e20cbaf-68da-45a6-9ccf-54193ac29fa5", "type": "appDefinitions"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update App returns "OK" response
    Given new "UpdateApp" request
    And request contains "app_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"components": [{"events": [], "name": "grid0", "properties": {"children": [{"events": [], "name": "gridCell0", "properties": {"children": [{"events": [], "name": "calloutValue0", "properties": {"isDisabled": false, "isLoading": false, "isVisible": true, "label": "CPU Usage", "size": "sm", "style": "vivid_yellow", "unit": "kB", "value": "42"}, "type": "calloutValue"}], "isVisible": "true", "layout": {"default": {"height": 8, "width": 2, "x": 0, "y": 0}}}, "type": "gridCell"}]}, "type": "grid"}], "description": "This is a simple example app", "name": "Example App", "queries": [], "rootInstanceName": "grid0"}, "id": "9e20cbaf-68da-45a6-9ccf-54193ac29fa5", "type": "appDefinitions"}}
    When the request is sent
    Then the response status is 200 OK
