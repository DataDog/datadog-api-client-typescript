@endpoint(ip-allowlist) @endpoint(ip-allowlist-v2)
Feature: IP Allowlist
  The IP allowlist API is used to manage the IP addresses that can access
  the Datadog API and web UI. It does not block access to intake APIs or
  public dashboards.  This is an enterprise-only feature. Request access by
  contacting Datadog support, or see the [IP Allowlist page](https://docs.da
  tadoghq.com/account_management/org_settings/ip_allowlist/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "IPAllowlist" API

  @generated @skip
  Scenario: Get IP Allowlist returns "Not Found" response
    Given new "GetIPAllowlist" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get IP Allowlist returns "OK" response
    Given new "GetIPAllowlist" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update IP Allowlist returns "Bad Request" response
    Given new "UpdateIPAllowlist" request
    And body with value {"data": {"attributes": {"entries": [{"data": {"attributes": {}, "type": "ip_allowlist_entry"}}]}, "type": "ip_allowlist"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update IP Allowlist returns "Not Found" response
    Given new "UpdateIPAllowlist" request
    And body with value {"data": {"attributes": {"entries": [{"data": {"attributes": {}, "type": "ip_allowlist_entry"}}]}, "type": "ip_allowlist"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update IP Allowlist returns "OK" response
    Given new "UpdateIPAllowlist" request
    And body with value {"data": {"attributes": {"entries": [{"data": {"attributes": {}, "type": "ip_allowlist_entry"}}]}, "type": "ip_allowlist"}}
    When the request is sent
    Then the response status is 200 OK
