@endpoint(workflow-automation) @endpoint(workflow-automation-v2)
Feature: Workflow Automation
  Datadog Workflow Automation allows you to automate your end-to-end
  processes by connecting Datadog with the rest of your tech stack. Build
  workflows to auto-remediate your alerts, streamline your incident and
  security processes, and reduce manual toil. Workflow Automation supports
  over 1,000+ OOTB actions, including AWS, JIRA, ServiceNow, GitHub, and
  OpenAI. Learn more in our Workflow Automation docs
  [here](https://docs.datadoghq.com/service_management/workflows/).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "WorkflowAutomation" API

  @generated @skip
  Scenario: Cancel a workflow instance returns "Bad Request" response
    Given new "CancelWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Cancel a workflow instance returns "Not Found" response
    Given new "CancelWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Cancel a workflow instance returns "OK" response
    Given new "CancelWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a Workflow returns "Bad request" response
    Given new "CreateWorkflow" request
    And body with value {"data": {"attributes": {"description": "A sample workflow.", "name": "Example Workflow", "published": true, "spec": {"annotations": [{"display": {"bounds": {"height": 150, "width": 300, "x": -375, "y": -0.5}}, "id": "99999999-9999-9999-9999-999999999999", "markdownTextAnnotation": {"text": "Example annotation."}}], "connectionEnvs": [{"connections": [{"connectionId": "11111111-1111-1111-1111-111111111111", "label": "INTEGRATION_DATADOG"}], "env": "default"}], "handle": "my-handle", "inputSchema": {"parameters": [{"defaultValue": "default", "name": "input", "type": "STRING"}]}, "outputSchema": {"parameters": [{"name": "output", "type": "ARRAY_OBJECT", "value": "{{ Steps.Step1 }}"}]}, "steps": [{"actionId": "com.datadoghq.dd.monitor.listMonitors", "connectionLabel": "INTEGRATION_DATADOG", "name": "Step1", "outboundEdges": [{"branchName": "main", "nextStepName": "Step2"}], "parameters": [{"name": "tags", "value": "service:monitoring"}]}, {"actionId": "com.datadoghq.core.noop", "name": "Step2"}], "triggers": [{"monitorTrigger": {"rateLimit": {"count": 1, "interval": "3600s"}}, "startStepNames": ["Step1"]}, {"githubWebhookTrigger": {}, "startStepNames": ["Step1"]}]}, "tags": ["team:infra", "service:monitoring", "foo:bar"]}, "type": "workflows"}}
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Create a Workflow returns "Successfully created a workflow." response
    Given new "CreateWorkflow" request
    And body with value {"data": {"attributes": {"description": "A sample workflow.", "name": "Example Workflow", "published": true, "spec": {"annotations": [{"display": {"bounds": {"height": 150, "width": 300, "x": -375, "y": -0.5}}, "id": "99999999-9999-9999-9999-999999999999", "markdownTextAnnotation": {"text": "Example annotation."}}], "connectionEnvs": [{"connections": [{"connectionId": "11111111-1111-1111-1111-111111111111", "label": "INTEGRATION_DATADOG"}], "env": "default"}], "handle": "my-handle", "inputSchema": {"parameters": [{"defaultValue": "default", "name": "input", "type": "STRING"}]}, "outputSchema": {"parameters": [{"name": "output", "type": "ARRAY_OBJECT", "value": "{{ Steps.Step1 }}"}]}, "steps": [{"actionId": "com.datadoghq.dd.monitor.listMonitors", "connectionLabel": "INTEGRATION_DATADOG", "name": "Step1", "outboundEdges": [{"branchName": "main", "nextStepName": "Step2"}], "parameters": [{"name": "tags", "value": "service:monitoring"}]}, {"actionId": "com.datadoghq.core.noop", "name": "Step2"}], "triggers": [{"monitorTrigger": {"rateLimit": {"count": 1, "interval": "3600s"}}, "startStepNames": ["Step1"]}, {"githubWebhookTrigger": {}, "startStepNames": ["Step1"]}]}, "tags": ["team:infra", "service:monitoring", "foo:bar"]}, "type": "workflows"}}
    When the request is sent
    Then the response status is 201 Successfully created a workflow.

  @generated @skip
  Scenario: Delete an existing Workflow returns "Not found" response
    Given new "DeleteWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete an existing Workflow returns "Successfully deleted a workflow." response
    Given new "DeleteWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 Successfully deleted a workflow.

  @generated @skip
  Scenario: Execute a workflow returns "Bad Request" response
    Given new "CreateWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And body with value {"meta": {}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Execute a workflow returns "Created" response
    Given new "CreateWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And body with value {"meta": {}}
    When the request is sent
    Then the response status is 200 Created

  @generated @skip
  Scenario: Get a workflow instance returns "Bad Request" response
    Given new "GetWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a workflow instance returns "Not Found" response
    Given new "GetWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get a workflow instance returns "OK" response
    Given new "GetWorkflowInstance" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And request contains "instance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an existing Workflow returns "Bad request" response
    Given new "GetWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Get an existing Workflow returns "Not found" response
    Given new "GetWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get an existing Workflow returns "Successfully got a workflow." response
    Given new "GetWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Successfully got a workflow.

  @generated @skip
  Scenario: List workflow instances returns "Bad Request" response
    Given new "ListWorkflowInstances" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List workflow instances returns "OK" response
    Given new "ListWorkflowInstances" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an existing Workflow returns "Bad request" response
    Given new "UpdateWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "A sample workflow.", "name": "Example Workflow", "published": true, "spec": {"annotations": [{"display": {"bounds": {"height": 150, "width": 300, "x": -375, "y": -0.5}}, "id": "99999999-9999-9999-9999-999999999999", "markdownTextAnnotation": {"text": "Example annotation."}}], "connectionEnvs": [{"connections": [{"connectionId": "11111111-1111-1111-1111-111111111111", "label": "INTEGRATION_DATADOG"}], "env": "default"}], "handle": "my-handle", "inputSchema": {"parameters": [{"defaultValue": "default", "name": "input", "type": "STRING"}]}, "outputSchema": {"parameters": [{"name": "output", "type": "ARRAY_OBJECT", "value": "{{ Steps.Step1 }}"}]}, "steps": [{"actionId": "com.datadoghq.dd.monitor.listMonitors", "connectionLabel": "INTEGRATION_DATADOG", "name": "Step1", "outboundEdges": [{"branchName": "main", "nextStepName": "Step2"}], "parameters": [{"name": "tags", "value": "service:monitoring"}]}, {"actionId": "com.datadoghq.core.noop", "name": "Step2"}], "triggers": [{"monitorTrigger": {"rateLimit": {"count": 1, "interval": "3600s"}}, "startStepNames": ["Step1"]}, {"githubWebhookTrigger": {}, "startStepNames": ["Step1"]}]}, "tags": ["team:infra", "service:monitoring", "foo:bar"]}, "id": "22222222-2222-2222-2222-222222222222", "type": "workflows"}}
    When the request is sent
    Then the response status is 400 Bad request

  @generated @skip
  Scenario: Update an existing Workflow returns "Not found" response
    Given new "UpdateWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "A sample workflow.", "name": "Example Workflow", "published": true, "spec": {"annotations": [{"display": {"bounds": {"height": 150, "width": 300, "x": -375, "y": -0.5}}, "id": "99999999-9999-9999-9999-999999999999", "markdownTextAnnotation": {"text": "Example annotation."}}], "connectionEnvs": [{"connections": [{"connectionId": "11111111-1111-1111-1111-111111111111", "label": "INTEGRATION_DATADOG"}], "env": "default"}], "handle": "my-handle", "inputSchema": {"parameters": [{"defaultValue": "default", "name": "input", "type": "STRING"}]}, "outputSchema": {"parameters": [{"name": "output", "type": "ARRAY_OBJECT", "value": "{{ Steps.Step1 }}"}]}, "steps": [{"actionId": "com.datadoghq.dd.monitor.listMonitors", "connectionLabel": "INTEGRATION_DATADOG", "name": "Step1", "outboundEdges": [{"branchName": "main", "nextStepName": "Step2"}], "parameters": [{"name": "tags", "value": "service:monitoring"}]}, {"actionId": "com.datadoghq.core.noop", "name": "Step2"}], "triggers": [{"monitorTrigger": {"rateLimit": {"count": 1, "interval": "3600s"}}, "startStepNames": ["Step1"]}, {"githubWebhookTrigger": {}, "startStepNames": ["Step1"]}]}, "tags": ["team:infra", "service:monitoring", "foo:bar"]}, "id": "22222222-2222-2222-2222-222222222222", "type": "workflows"}}
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Update an existing Workflow returns "Successfully updated a workflow." response
    Given new "UpdateWorkflow" request
    And request contains "workflow_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "A sample workflow.", "name": "Example Workflow", "published": true, "spec": {"annotations": [{"display": {"bounds": {"height": 150, "width": 300, "x": -375, "y": -0.5}}, "id": "99999999-9999-9999-9999-999999999999", "markdownTextAnnotation": {"text": "Example annotation."}}], "connectionEnvs": [{"connections": [{"connectionId": "11111111-1111-1111-1111-111111111111", "label": "INTEGRATION_DATADOG"}], "env": "default"}], "handle": "my-handle", "inputSchema": {"parameters": [{"defaultValue": "default", "name": "input", "type": "STRING"}]}, "outputSchema": {"parameters": [{"name": "output", "type": "ARRAY_OBJECT", "value": "{{ Steps.Step1 }}"}]}, "steps": [{"actionId": "com.datadoghq.dd.monitor.listMonitors", "connectionLabel": "INTEGRATION_DATADOG", "name": "Step1", "outboundEdges": [{"branchName": "main", "nextStepName": "Step2"}], "parameters": [{"name": "tags", "value": "service:monitoring"}]}, {"actionId": "com.datadoghq.core.noop", "name": "Step2"}], "triggers": [{"monitorTrigger": {"rateLimit": {"count": 1, "interval": "3600s"}}, "startStepNames": ["Step1"]}, {"githubWebhookTrigger": {}, "startStepNames": ["Step1"]}]}, "tags": ["team:infra", "service:monitoring", "foo:bar"]}, "id": "22222222-2222-2222-2222-222222222222", "type": "workflows"}}
    When the request is sent
    Then the response status is 200 Successfully updated a workflow.
