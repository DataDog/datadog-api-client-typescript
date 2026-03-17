@endpoint(logs-custom-destinations) @endpoint(logs-custom-destinations-v2)
Feature: Logs Custom Destinations
  Custom Destinations forward all the logs ingested to an external
  destination.  **Note**: Log forwarding is not available for the Government
  (US1-FED) site. Contact your account representative for more information.
  See the [Custom Destinations
  Page](https://app.datadoghq.com/logs/pipelines/log-forwarding/custom-
  destinations) for a list of the custom destinations currently configured
  in web UI.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "LogsCustomDestinations" API

  @generated @skip
  Scenario: Create a custom destination returns "Bad Request" response
    Given new "CreateLogsCustomDestination" request
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "type": "custom_destination"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a custom destination returns "Conflict" response
    Given new "CreateLogsCustomDestination" request
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "type": "custom_destination"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a custom destination returns "OK" response
    Given new "CreateLogsCustomDestination" request
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "type": "custom_destination"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a custom destination returns "Bad Request" response
    Given new "DeleteLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a custom destination returns "Not Found" response
    Given new "DeleteLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a custom destination returns "OK" response
    Given new "DeleteLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a custom destination returns "Bad Request" response
    Given new "GetLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a custom destination returns "Not Found" response
    Given new "GetLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a custom destination returns "OK" response
    Given new "GetLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all custom destinations returns "OK" response
    Given new "ListLogsCustomDestinations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a custom destination returns "Bad Request" response
    Given new "UpdateLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "id": "be5d7a69-d0c8-4d4d-8ee8-bba292d98139", "type": "custom_destination"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a custom destination returns "Conflict" response
    Given new "UpdateLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "id": "be5d7a69-d0c8-4d4d-8ee8-bba292d98139", "type": "custom_destination"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update a custom destination returns "Not Found" response
    Given new "UpdateLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "id": "be5d7a69-d0c8-4d4d-8ee8-bba292d98139", "type": "custom_destination"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a custom destination returns "OK" response
    Given new "UpdateLogsCustomDestination" request
    And request contains "custom_destination_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "forward_tags": true, "forward_tags_restriction_list": ["datacenter", "host"], "forward_tags_restriction_list_type": "ALLOW_LIST", "forwarder_destination": {"auth": {"password": "datadog-custom-destination-password", "type": "basic", "username": "datadog-custom-destination-username"}, "endpoint": "https://example.com", "type": "http"}, "name": "Nginx logs", "query": "source:nginx"}, "id": "be5d7a69-d0c8-4d4d-8ee8-bba292d98139", "type": "custom_destination"}}
    When the request is sent
    Then the response status is 200 OK
