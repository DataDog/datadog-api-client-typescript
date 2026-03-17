@endpoint(network-device-monitoring) @endpoint(network-device-monitoring-v2)
Feature: Network Device Monitoring
  The Network Device Monitoring API allows you to fetch devices and
  interfaces and their attributes. See the [Network Device Monitoring
  page](https://docs.datadoghq.com/network_monitoring/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "NetworkDeviceMonitoring" API

  @generated @skip
  Scenario: Get the device details returns "Not Found" response
    Given new "GetDevice" request
    And request contains "device_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get the device details returns "OK" response
    Given new "GetDevice" request
    And request contains "device_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of devices returns "Bad Request" response
    Given new "ListDevices" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get the list of devices returns "OK" response
    Given new "ListDevices" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get the list of devices returns "OK" response with pagination
    Given new "ListDevices" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of interfaces of the device returns "OK" response
    Given new "GetInterfaces" request
    And request contains "device_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of tags for a device returns "Not Found" response
    Given new "ListDeviceUserTags" request
    And request contains "device_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get the list of tags for a device returns "OK" response
    Given new "ListDeviceUserTags" request
    And request contains "device_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List tags for an interface returns "Not Found" response
    Given new "ListInterfaceUserTags" request
    And request contains "interface_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: List tags for an interface returns "OK" response
    Given new "ListInterfaceUserTags" request
    And request contains "interface_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update the tags for a device returns "Not Found" response
    Given new "UpdateDeviceUserTags" request
    And request contains "device_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"tags": ["tag:test", "tag:testbis"]}, "id": "example:1.2.3.4"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update the tags for a device returns "OK" response
    Given new "UpdateDeviceUserTags" request
    And request contains "device_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"tags": ["tag:test", "tag:testbis"]}, "id": "example:1.2.3.4"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update the tags for an interface returns "Not Found" response
    Given new "UpdateInterfaceUserTags" request
    And request contains "interface_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"tags": ["tag:test", "tag:testbis"]}, "id": "example:1.2.3.4:1"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update the tags for an interface returns "OK" response
    Given new "UpdateInterfaceUserTags" request
    And request contains "interface_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"tags": ["tag:test", "tag:testbis"]}, "id": "example:1.2.3.4:1"}}
    When the request is sent
    Then the response status is 200 OK
