@endpoint(service-scorecards) @endpoint(service-scorecards-v2)
Feature: Service Scorecards
  API to create and update scorecard rules and outcomes. See [Service
  Scorecards](https://docs.datadoghq.com/service_catalog/scorecards) for
  more information.  This feature is currently in BETA. If you have any
  feedback, contact [Datadog support](https://docs.datadoghq.com/help/).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceScorecards" API

  @generated @skip
  Scenario: Create a new rule returns "Bad Request" response
    Given operation "CreateScorecardRule" enabled
    And new "CreateScorecardRule" request
    And body with value {"data": {"attributes": {"enabled": true, "level": 2, "name": "Team Defined", "scorecard_name": "Deployments automated via Deployment Trains"}, "type": "rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new rule returns "Created" response
    Given operation "CreateScorecardRule" enabled
    And new "CreateScorecardRule" request
    And body with value {"data": {"attributes": {"enabled": true, "level": 2, "name": "Team Defined", "scorecard_name": "Deployments automated via Deployment Trains"}, "type": "rule"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create outcomes batch returns "Bad Request" response
    Given operation "CreateScorecardOutcomesBatch" enabled
    And new "CreateScorecardOutcomesBatch" request
    And body with value {"data": {"attributes": {"results": [{"remarks": "See: <a href=\"https://app.datadoghq.com/services\">Services</a>", "rule_id": "q8MQxk8TCqrHnWkx", "service_name": "my-service", "state": "pass"}]}, "type": "batched-outcome"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create outcomes batch returns "OK" response
    Given operation "CreateScorecardOutcomesBatch" enabled
    And new "CreateScorecardOutcomesBatch" request
    And body with value {"data": {"attributes": {"results": [{"remarks": "See: <a href=\"https://app.datadoghq.com/services\">Services</a>", "rule_id": "q8MQxk8TCqrHnWkx", "service_name": "my-service", "state": "pass"}]}, "type": "batched-outcome"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a rule returns "Bad Request" response
    Given operation "DeleteScorecardRule" enabled
    And new "DeleteScorecardRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a rule returns "Not Found" response
    Given operation "DeleteScorecardRule" enabled
    And new "DeleteScorecardRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a rule returns "OK" response
    Given operation "DeleteScorecardRule" enabled
    And new "DeleteScorecardRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: List all rule outcomes returns "Bad Request" response
    Given operation "ListScorecardOutcomes" enabled
    And new "ListScorecardOutcomes" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List all rule outcomes returns "OK" response
    Given operation "ListScorecardOutcomes" enabled
    And new "ListScorecardOutcomes" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List all rule outcomes returns "OK" response with pagination
    Given operation "ListScorecardOutcomes" enabled
    And new "ListScorecardOutcomes" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List all rules returns "Bad Request" response
    Given operation "ListScorecardRules" enabled
    And new "ListScorecardRules" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List all rules returns "OK" response
    Given operation "ListScorecardRules" enabled
    And new "ListScorecardRules" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List all rules returns "OK" response with pagination
    Given operation "ListScorecardRules" enabled
    And new "ListScorecardRules" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Scorecard outcomes asynchronously returns "Accepted" response
    Given operation "UpdateScorecardOutcomesAsync" enabled
    And new "UpdateScorecardOutcomesAsync" request
    And body with value {"data": {"attributes": {"results": [{"entity_reference": "service:my-service", "remarks": "See: <a href=\"https://app.datadoghq.com/services\">Services</a>", "rule_id": "q8MQxk8TCqrHnWkx", "state": "pass"}]}, "type": "batched-outcome"}}
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Update Scorecard outcomes asynchronously returns "Bad Request" response
    Given operation "UpdateScorecardOutcomesAsync" enabled
    And new "UpdateScorecardOutcomesAsync" request
    And body with value {"data": {"attributes": {"results": [{"entity_reference": "service:my-service", "remarks": "See: <a href=\"https://app.datadoghq.com/services\">Services</a>", "rule_id": "q8MQxk8TCqrHnWkx", "state": "pass"}]}, "type": "batched-outcome"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Scorecard outcomes asynchronously returns "Conflict" response
    Given operation "UpdateScorecardOutcomesAsync" enabled
    And new "UpdateScorecardOutcomesAsync" request
    And body with value {"data": {"attributes": {"results": [{"entity_reference": "service:my-service", "remarks": "See: <a href=\"https://app.datadoghq.com/services\">Services</a>", "rule_id": "q8MQxk8TCqrHnWkx", "state": "pass"}]}, "type": "batched-outcome"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update an existing rule returns "Bad Request" response
    Given operation "UpdateScorecardRule" enabled
    And new "UpdateScorecardRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "level": 2, "name": "Team Defined", "scorecard_name": "Deployments automated via Deployment Trains"}, "type": "rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an existing rule returns "Rule updated successfully" response
    Given operation "UpdateScorecardRule" enabled
    And new "UpdateScorecardRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"enabled": true, "level": 2, "name": "Team Defined", "scorecard_name": "Deployments automated via Deployment Trains"}, "type": "rule"}}
    When the request is sent
    Then the response status is 200 Rule updated successfully
