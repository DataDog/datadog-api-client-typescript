@endpoint(observability-pipelines) @endpoint(observability-pipelines-v2)
Feature: Observability Pipelines
  Observability Pipelines allows you to collect and process logs within your
  own infrastructure, and then route them to downstream integrations.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ObservabilityPipelines" API

  @generated @skip
  Scenario: Create a new pipeline returns "Bad Request" response
    Given new "CreatePipeline" request
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "type": "pipelines"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new pipeline returns "Conflict" response
    Given new "CreatePipeline" request
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "type": "pipelines"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a new pipeline returns "OK" response
    Given new "CreatePipeline" request
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "type": "pipelines"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete a pipeline returns "Conflict" response
    Given new "DeletePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete a pipeline returns "Not Found" response
    Given new "DeletePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a pipeline returns "OK" response
    Given new "DeletePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a specific pipeline returns "OK" response
    Given new "GetPipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List pipelines returns "Bad Request" response
    Given new "ListPipelines" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List pipelines returns "OK" response
    Given new "ListPipelines" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a pipeline returns "Bad Request" response
    Given new "UpdatePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "type": "pipelines"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a pipeline returns "Conflict" response
    Given new "UpdatePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "type": "pipelines"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Update a pipeline returns "Not Found" response
    Given new "UpdatePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "type": "pipelines"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a pipeline returns "OK" response
    Given new "UpdatePipeline" request
    And request contains "pipeline_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6", "type": "pipelines"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Validate an observability pipeline returns "Bad Request" response
    Given new "ValidatePipeline" request
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "type": "pipelines"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Validate an observability pipeline returns "OK" response
    Given new "ValidatePipeline" request
    And body with value {"data": {"attributes": {"config": {"destinations": [{"id": "datadog-logs-destination", "inputs": ["my-processor-group"], "type": "datadog_logs"}], "pipeline_type": "logs", "processor_groups": [{"enabled": true, "id": "my-processor-group", "include": "service:my-service", "inputs": ["datadog-agent-source"], "processors": [{"enabled": true, "id": "filter-processor", "include": "status:error", "type": "filter"}, {"enabled": true, "field": "message", "id": "json-processor", "include": "*", "type": "parse_json"}]}], "processors": [], "sources": [{"id": "datadog-agent-source", "type": "datadog_agent"}]}, "name": "Main Observability Pipeline"}, "type": "pipelines"}}
    When the request is sent
    Then the response status is 200 OK
