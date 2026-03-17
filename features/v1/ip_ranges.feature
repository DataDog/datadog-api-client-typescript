@endpoint(ip-ranges) @endpoint(ip-ranges-v1)
Feature: IP Ranges
  Get a list of IP prefixes belonging to Datadog.

  @generated @skip
  Scenario: List IP Ranges returns "OK" response
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "IPRanges" API
    And new "GetIPRanges" request
    When the request is sent
    Then the response status is 200 OK
