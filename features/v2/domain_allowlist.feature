@endpoint(domain-allowlist) @endpoint(domain-allowlist-v2)
Feature: Domain Allowlist
  Configure your Datadog Email Domain Allowlist directly through the Datadog
  API. The Email Domain Allowlist controls the domains that certain datadog
  emails can be sent to. For more information, see the [Domain Allowlist
  docs page](https://docs.datadoghq.com/account_management/org_settings/doma
  in_allowlist)

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "DomainAllowlist" API

  @generated @skip
  Scenario: Get Domain Allowlist returns "OK" response
    Given new "GetDomainAllowlist" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Sets Domain Allowlist returns "OK" response
    Given new "PatchDomainAllowlist" request
    And body with value {"data": {"attributes": {"domains": []}, "id": null, "type": "domain_allowlist"}}
    When the request is sent
    Then the response status is 200 OK
