@endpoint(csm-threats) @endpoint(csm-threats-v2)
Feature: CSM Threats
  Workload Protection monitors file, network, and process activity across
  your environment to detect real-time threats to your infrastructure. See
  [Workload
  Protection](https://docs.datadoghq.com/security/workload_protection/) for
  more information on setting up Workload Protection.  **Note**: These
  endpoints are split based on whether you are using the US1-FED site or
  not. Please reference the specific resource for the site you are using.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CSMThreats" API

  @generated @skip
  Scenario: Create a Workload Protection agent rule (US1-FED) returns "Bad Request" response
    Given new "CreateCloudWorkloadSecurityAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a Workload Protection agent rule (US1-FED) returns "Conflict" response
    Given new "CreateCloudWorkloadSecurityAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a Workload Protection agent rule (US1-FED) returns "OK" response
    Given new "CreateCloudWorkloadSecurityAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a Workload Protection agent rule returns "Bad Request" response
    Given new "CreateCSMThreatsAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a Workload Protection agent rule returns "Conflict" response
    Given new "CreateCSMThreatsAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a Workload Protection agent rule returns "OK" response
    Given new "CreateCSMThreatsAgentRule" request
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "filters": [], "monitoring": [], "name": "my_agent_rule", "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "type": "agent_rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a Workload Protection policy returns "Bad Request" response
    Given new "CreateCSMThreatsAgentPolicy" request
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "type": "policy"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a Workload Protection policy returns "Conflict" response
    Given new "CreateCSMThreatsAgentPolicy" request
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "type": "policy"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a Workload Protection policy returns "OK" response
    Given new "CreateCSMThreatsAgentPolicy" request
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "type": "policy"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a Workload Protection agent rule (US1-FED) returns "Not Found" response
    Given new "DeleteCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a Workload Protection agent rule (US1-FED) returns "OK" response
    Given new "DeleteCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a Workload Protection agent rule returns "Not Found" response
    Given new "DeleteCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a Workload Protection agent rule returns "OK" response
    Given new "DeleteCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a Workload Protection policy returns "Not Found" response
    Given new "DeleteCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a Workload Protection policy returns "OK" response
    Given new "DeleteCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 202 OK

  @generated @skip
  Scenario: Delete a Workload Protection policy returns "OK" response
    Given new "DeleteCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Download the Workload Protection policy (US1-FED) returns "OK" response
    Given new "DownloadCloudWorkloadPolicyFile" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Download the Workload Protection policy returns "OK" response
    Given new "DownloadCSMThreatsPolicy" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a Workload Protection agent rule (US1-FED) returns "Not Found" response
    Given new "GetCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a Workload Protection agent rule (US1-FED) returns "OK" response
    Given new "GetCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a Workload Protection agent rule returns "Not Found" response
    Given new "GetCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a Workload Protection agent rule returns "OK" response
    Given new "GetCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a Workload Protection policy returns "Not Found" response
    Given new "GetCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a Workload Protection policy returns "OK" response
    Given new "GetCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all Workload Protection agent rules (US1-FED) returns "OK" response
    Given new "ListCloudWorkloadSecurityAgentRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all Workload Protection agent rules returns "OK" response
    Given new "ListCSMThreatsAgentRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all Workload Protection policies returns "OK" response
    Given new "ListCSMThreatsAgentPolicies" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a Workload Protection agent rule (US1-FED) returns "Bad Request" response
    Given new "UpdateCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a Workload Protection agent rule (US1-FED) returns "Concurrent Modification" response
    Given new "UpdateCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a Workload Protection agent rule (US1-FED) returns "Not Found" response
    Given new "UpdateCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a Workload Protection agent rule (US1-FED) returns "OK" response
    Given new "UpdateCloudWorkloadSecurityAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a Workload Protection agent rule returns "Bad Request" response
    Given new "UpdateCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a Workload Protection agent rule returns "Concurrent Modification" response
    Given new "UpdateCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a Workload Protection agent rule returns "Not Found" response
    Given new "UpdateCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a Workload Protection agent rule returns "OK" response
    Given new "UpdateCSMThreatsAgentRule" request
    And request contains "agent_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"actions": [{"hash": {}, "kill": {}, "metadata": {}, "set": {}}], "blocking": [], "description": "My Agent rule", "disabled": [], "enabled": true, "expression": "exec.file.name == \"sh\"", "monitoring": [], "policy_id": "a8c8e364-6556-434d-b798-a4c23de29c0b", "product_tags": [], "silent": false}, "id": "3dd-0uc-h1s", "type": "agent_rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a Workload Protection policy returns "Bad Request" response
    Given new "UpdateCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "id": "6517fcc1-cec7-4394-a655-8d6e9d085255", "type": "policy"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a Workload Protection policy returns "Concurrent Modification" response
    Given new "UpdateCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "id": "6517fcc1-cec7-4394-a655-8d6e9d085255", "type": "policy"}}
    When the request is sent
    Then the response status is 409 Concurrent Modification

  @generated @skip
  Scenario: Update a Workload Protection policy returns "Not Found" response
    Given new "UpdateCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "id": "6517fcc1-cec7-4394-a655-8d6e9d085255", "type": "policy"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a Workload Protection policy returns "OK" response
    Given new "UpdateCSMThreatsAgentPolicy" request
    And request contains "policy_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "My agent policy", "enabled": true, "hostTags": [], "hostTagsLists": [[]], "name": "my_agent_policy"}, "id": "6517fcc1-cec7-4394-a655-8d6e9d085255", "type": "policy"}}
    When the request is sent
    Then the response status is 200 OK
