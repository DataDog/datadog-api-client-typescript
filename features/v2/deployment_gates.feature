@endpoint(deployment-gates) @endpoint(deployment-gates-v2)
Feature: Deployment Gates
  Manage Deployment Gates using this API to reduce the likelihood and impact
  of incidents caused by deployments. See the [Deployment Gates
  documentation](https://docs.datadoghq.com/deployment_gates/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "DeploymentGates" API

  @generated @skip
  Scenario: Create deployment gate returns "Bad request." response
    Given operation "CreateDeploymentGate" enabled
    And new "CreateDeploymentGate" request
    And body with value {"data": {"attributes": {"dry_run": false, "env": "production", "identifier": "pre", "service": "my-service"}, "type": "deployment_gate"}}
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Create deployment gate returns "OK" response
    Given operation "CreateDeploymentGate" enabled
    And new "CreateDeploymentGate" request
    And body with value {"data": {"attributes": {"dry_run": false, "env": "production", "identifier": "pre", "service": "my-service"}, "type": "deployment_gate"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create deployment rule returns "Bad request." response
    Given operation "CreateDeploymentRule" enabled
    And new "CreateDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false, "name": "My deployment rule", "options": {"duration": 3600, "excluded_resources": ["resource1", "resource2"]}, "type": "faulty_deployment_detection"}, "type": "deployment_rule"}}
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Create deployment rule returns "OK" response
    Given operation "CreateDeploymentRule" enabled
    And new "CreateDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false, "name": "My deployment rule", "options": {"duration": 3600, "excluded_resources": ["resource1", "resource2"]}, "type": "faulty_deployment_detection"}, "type": "deployment_rule"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete deployment gate returns "Bad request." response
    Given operation "DeleteDeploymentGate" enabled
    And new "DeleteDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Delete deployment gate returns "Deployment gate not found." response
    Given operation "DeleteDeploymentGate" enabled
    And new "DeleteDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Deployment gate not found.

  @generated @skip
  Scenario: Delete deployment gate returns "No Content" response
    Given operation "DeleteDeploymentGate" enabled
    And new "DeleteDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete deployment rule returns "Bad request." response
    Given operation "DeleteDeploymentRule" enabled
    And new "DeleteDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Delete deployment rule returns "Deployment gate not found." response
    Given operation "DeleteDeploymentRule" enabled
    And new "DeleteDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Deployment gate not found.

  @generated @skip
  Scenario: Delete deployment rule returns "No Content" response
    Given operation "DeleteDeploymentRule" enabled
    And new "DeleteDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get deployment gate returns "Bad request." response
    Given operation "GetDeploymentGate" enabled
    And new "GetDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Get deployment gate returns "Deployment gate not found." response
    Given operation "GetDeploymentGate" enabled
    And new "GetDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Deployment gate not found.

  @generated @skip
  Scenario: Get deployment gate returns "OK" response
    Given operation "GetDeploymentGate" enabled
    And new "GetDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get deployment rule returns "Bad request." response
    Given operation "GetDeploymentRule" enabled
    And new "GetDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Get deployment rule returns "Deployment rule not found." response
    Given operation "GetDeploymentRule" enabled
    And new "GetDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Deployment rule not found.

  @generated @skip
  Scenario: Get deployment rule returns "OK" response
    Given operation "GetDeploymentRule" enabled
    And new "GetDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get rules for a deployment gate returns "Bad request." response
    Given operation "GetDeploymentGateRules" enabled
    And new "GetDeploymentGateRules" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Get rules for a deployment gate returns "OK" response
    Given operation "GetDeploymentGateRules" enabled
    And new "GetDeploymentGateRules" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update deployment gate returns "Bad request." response
    Given operation "UpdateDeploymentGate" enabled
    And new "UpdateDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false}, "id": "12345678-1234-1234-1234-123456789012", "type": "deployment_gate"}}
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Update deployment gate returns "Deployment gate not found." response
    Given operation "UpdateDeploymentGate" enabled
    And new "UpdateDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false}, "id": "12345678-1234-1234-1234-123456789012", "type": "deployment_gate"}}
    When the request is sent
    Then the response status is 404 Deployment gate not found.

  @generated @skip
  Scenario: Update deployment gate returns "OK" response
    Given operation "UpdateDeploymentGate" enabled
    And new "UpdateDeploymentGate" request
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false}, "id": "12345678-1234-1234-1234-123456789012", "type": "deployment_gate"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update deployment rule returns "Bad request." response
    Given operation "UpdateDeploymentRule" enabled
    And new "UpdateDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false, "name": "Updated deployment rule", "options": {"duration": 3600, "excluded_resources": ["resource1", "resource2"]}}, "type": "deployment_rule"}}
    When the request is sent
    Then the response status is 400 Bad request.

  @generated @skip
  Scenario: Update deployment rule returns "Deployment rule not found." response
    Given operation "UpdateDeploymentRule" enabled
    And new "UpdateDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false, "name": "Updated deployment rule", "options": {"duration": 3600, "excluded_resources": ["resource1", "resource2"]}}, "type": "deployment_rule"}}
    When the request is sent
    Then the response status is 404 Deployment rule not found.

  @generated @skip
  Scenario: Update deployment rule returns "OK" response
    Given operation "UpdateDeploymentRule" enabled
    And new "UpdateDeploymentRule" request
    And request contains "gate_id" parameter from "REPLACE.ME"
    And request contains "id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"dry_run": false, "name": "Updated deployment rule", "options": {"duration": 3600, "excluded_resources": ["resource1", "resource2"]}}, "type": "deployment_rule"}}
    When the request is sent
    Then the response status is 200 OK
