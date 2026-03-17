@endpoint(case-management) @endpoint(case-management-v2)
Feature: Case Management
  View and manage cases and projects within Case Management. See the [Case
  Management
  page](https://docs.datadoghq.com/service_management/case_management/) for
  more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "CaseManagement" API

  @generated @skip
  Scenario: Archive case returns "Bad Request" response
    Given new "ArchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Archive case returns "Not Found" response
    Given new "ArchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Archive case returns "OK" response
    Given new "ArchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Assign case returns "Bad Request" response
    Given new "AssignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee_id": "f98a5a5b-e0ff-45d4-b2f5-afe6e74de504"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Assign case returns "Not Found" response
    Given new "AssignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee_id": "f98a5a5b-e0ff-45d4-b2f5-afe6e74de504"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Assign case returns "OK" response
    Given new "AssignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignee_id": "f98a5a5b-e0ff-45d4-b2f5-afe6e74de504"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Comment case returns "Bad Request" response
    Given new "CommentCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"comment": "This is my comment !"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Comment case returns "Not Found" response
    Given new "CommentCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"comment": "This is my comment !"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Comment case returns "OK" response
    Given new "CommentCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"comment": "This is my comment !"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create Jira issue for case returns "Accepted" response
    Given operation "CreateCaseJiraIssue" enabled
    And new "CreateCaseJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"fields": {}, "issue_type_id": "10001", "jira_account_id": "1234", "project_id": "5678"}, "type": "issues"}}
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Create Jira issue for case returns "Bad Request" response
    Given operation "CreateCaseJiraIssue" enabled
    And new "CreateCaseJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"fields": {}, "issue_type_id": "10001", "jira_account_id": "1234", "project_id": "5678"}, "type": "issues"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Jira issue for case returns "Not Found" response
    Given operation "CreateCaseJiraIssue" enabled
    And new "CreateCaseJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"fields": {}, "issue_type_id": "10001", "jira_account_id": "1234", "project_id": "5678"}, "type": "issues"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create ServiceNow ticket for case returns "Accepted" response
    Given operation "CreateCaseServiceNowTicket" enabled
    And new "CreateCaseServiceNowTicket" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignment_group": "IT Support", "instance_name": "my-instance"}, "type": "tickets"}}
    When the request is sent
    Then the response status is 202 Accepted

  @generated @skip
  Scenario: Create ServiceNow ticket for case returns "Bad Request" response
    Given operation "CreateCaseServiceNowTicket" enabled
    And new "CreateCaseServiceNowTicket" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignment_group": "IT Support", "instance_name": "my-instance"}, "type": "tickets"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create ServiceNow ticket for case returns "Not Found" response
    Given operation "CreateCaseServiceNowTicket" enabled
    And new "CreateCaseServiceNowTicket" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"assignment_group": "IT Support", "instance_name": "my-instance"}, "type": "tickets"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create a case returns "Bad Request" response
    Given new "CreateCase" request
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED", "status_name": "Open", "title": "Security breach investigation", "type_id": "3b010bde-09ce-4449-b745-71dd5f861963"}, "relationships": {"assignee": {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "user"}}, "project": {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a case returns "CREATED" response
    Given new "CreateCase" request
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED", "status_name": "Open", "title": "Security breach investigation", "type_id": "3b010bde-09ce-4449-b745-71dd5f861963"}, "relationships": {"assignee": {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "user"}}, "project": {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}}, "type": "case"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create a case returns "Not Found" response
    Given new "CreateCase" request
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED", "status_name": "Open", "title": "Security breach investigation", "type_id": "3b010bde-09ce-4449-b745-71dd5f861963"}, "relationships": {"assignee": {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "user"}}, "project": {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create a notification rule returns "Bad Request" response
    Given new "CreateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_enabled": true, "recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a notification rule returns "CREATED" response
    Given new "CreateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_enabled": true, "recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create a notification rule returns "Not Found" response
    Given new "CreateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_enabled": true, "recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create a project returns "Bad Request" response
    Given new "CreateProject" request
    And body with value {"data": {"attributes": {"enabled_custom_case_types": [], "key": "SEC", "name": "Security Investigation"}, "type": "project"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a project returns "CREATED" response
    Given new "CreateProject" request
    And body with value {"data": {"attributes": {"enabled_custom_case_types": [], "key": "SEC", "name": "Security Investigation"}, "type": "project"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create a project returns "Not Found" response
    Given new "CreateProject" request
    And body with value {"data": {"attributes": {"enabled_custom_case_types": [], "key": "SEC", "name": "Security Investigation"}, "type": "project"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create investigation notebook for case returns "Bad Request" response
    Given operation "CreateCaseNotebook" enabled
    And new "CreateCaseNotebook" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "notebook"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create investigation notebook for case returns "No Content" response
    Given operation "CreateCaseNotebook" enabled
    And new "CreateCaseNotebook" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "notebook"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Create investigation notebook for case returns "Not Found" response
    Given operation "CreateCaseNotebook" enabled
    And new "CreateCaseNotebook" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "notebook"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a notification rule returns "API error response" response
    Given new "DeleteProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And request contains "notification_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response

  @generated @skip
  Scenario: Delete a notification rule returns "No Content" response
    Given new "DeleteProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And request contains "notification_rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete case comment returns "Bad Request" response
    Given new "DeleteCaseComment" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "cell_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete case comment returns "No Content" response
    Given new "DeleteCaseComment" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "cell_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete case comment returns "Not Found" response
    Given new "DeleteCaseComment" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "cell_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete custom attribute from case returns "Not Found" response
    Given new "DeleteCaseCustomAttribute" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_key" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete custom attribute from case returns "OK" response
    Given new "DeleteCaseCustomAttribute" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_key" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all projects returns "Bad Request" response
    Given new "GetProjects" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all projects returns "Not Found" response
    Given new "GetProjects" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all projects returns "OK" response
    Given new "GetProjects" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get notification rules returns "Bad Request" response
    Given new "GetProjectNotificationRules" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get notification rules returns "Not Found" response
    Given new "GetProjectNotificationRules" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get notification rules returns "OK" response
    Given new "GetProjectNotificationRules" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the details of a case returns "Bad Request" response
    Given new "GetCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get the details of a case returns "Not Found" response
    Given new "GetCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get the details of a case returns "OK" response
    Given new "GetCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the details of a project returns "Bad Request" response
    Given new "GetProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get the details of a project returns "Not Found" response
    Given new "GetProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get the details of a project returns "OK" response
    Given new "GetProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Link existing Jira issue to case returns "Bad Request" response
    Given operation "LinkJiraIssueToCase" enabled
    And new "LinkJiraIssueToCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"jira_issue_url": "https://jira.example.com/browse/PROJ-123"}, "type": "issues"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Link existing Jira issue to case returns "Conflict" response
    Given operation "LinkJiraIssueToCase" enabled
    And new "LinkJiraIssueToCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"jira_issue_url": "https://jira.example.com/browse/PROJ-123"}, "type": "issues"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Link existing Jira issue to case returns "No Content" response
    Given operation "LinkJiraIssueToCase" enabled
    And new "LinkJiraIssueToCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"jira_issue_url": "https://jira.example.com/browse/PROJ-123"}, "type": "issues"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Link existing Jira issue to case returns "Not Found" response
    Given operation "LinkJiraIssueToCase" enabled
    And new "LinkJiraIssueToCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"jira_issue_url": "https://jira.example.com/browse/PROJ-123"}, "type": "issues"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Link incident to case returns "Bad Request" response
    Given operation "LinkIncident" enabled
    And new "LinkIncident" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "incidents"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Link incident to case returns "Created" response
    Given operation "LinkIncident" enabled
    And new "LinkIncident" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "incidents"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Link incident to case returns "Not Found" response
    Given operation "LinkIncident" enabled
    And new "LinkIncident" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "00000000-0000-0000-0000-000000000000", "type": "incidents"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Remove Jira issue link from case returns "Bad Request" response
    Given operation "UnlinkJiraIssue" enabled
    And new "UnlinkJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Remove Jira issue link from case returns "No Content" response
    Given operation "UnlinkJiraIssue" enabled
    And new "UnlinkJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove Jira issue link from case returns "Not Found" response
    Given operation "UnlinkJiraIssue" enabled
    And new "UnlinkJiraIssue" request
    And request contains "case_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Remove a project returns "API error response" response
    Given new "DeleteProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response

  @generated @skip
  Scenario: Remove a project returns "No Content" response
    Given new "DeleteProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Search cases returns "Bad Request" response
    Given new "SearchCases" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search cases returns "Not Found" response
    Given new "SearchCases" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Search cases returns "OK" response
    Given new "SearchCases" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Search cases returns "OK" response with pagination
    Given new "SearchCases" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Unarchive case returns "Bad Request" response
    Given new "UnarchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Unarchive case returns "Not Found" response
    Given new "UnarchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Unarchive case returns "OK" response
    Given new "UnarchiveCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Unassign case returns "Bad Request" response
    Given new "UnassignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Unassign case returns "Not Found" response
    Given new "UnassignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Unassign case returns "OK" response
    Given new "UnassignCase" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a notification rule returns "Bad Request" response
    Given new "UpdateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And request contains "notification_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a notification rule returns "No Content" response
    Given new "UpdateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And request contains "notification_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Update a notification rule returns "Not Found" response
    Given new "UpdateProjectNotificationRule" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And request contains "notification_rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"recipients": [{"data": {}, "type": "EMAIL"}], "triggers": [{"data": {}, "type": "CASE_CREATED"}]}, "type": "notification_rule"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a project returns "Bad Request" response
    Given new "UpdateProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"columns_config": {"columns": [{"sort": {}}]}, "enabled_custom_case_types": [], "settings": {"auto_close_inactive_cases": {}, "auto_transition_assigned_cases": {}, "integration_incident": {"field_mappings": [{}], "severity_config": {}}, "integration_jira": {"auto_creation": {}, "metadata": {}, "sync": {"properties": {"assignee": {}, "comments": {}, "description": {}, "due_date": {}, "priority": {}, "status": {}, "title": {}}}}, "integration_monitor": {}, "integration_on_call": {"escalation_queries": [{"target": {}}]}, "integration_service_now": {"auto_creation": {}, "sync_config": {"properties": {"comments": {}, "priority": {}, "status": {}}}}, "notification": {"destinations": []}}}, "type": "project"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a project returns "Not Found" response
    Given new "UpdateProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"columns_config": {"columns": [{"sort": {}}]}, "enabled_custom_case_types": [], "settings": {"auto_close_inactive_cases": {}, "auto_transition_assigned_cases": {}, "integration_incident": {"field_mappings": [{}], "severity_config": {}}, "integration_jira": {"auto_creation": {}, "metadata": {}, "sync": {"properties": {"assignee": {}, "comments": {}, "description": {}, "due_date": {}, "priority": {}, "status": {}, "title": {}}}}, "integration_monitor": {}, "integration_on_call": {"escalation_queries": [{"target": {}}]}, "integration_service_now": {"auto_creation": {}, "sync_config": {"properties": {"comments": {}, "priority": {}, "status": {}}}}, "notification": {"destinations": []}}}, "type": "project"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update a project returns "OK" response
    Given new "UpdateProject" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"columns_config": {"columns": [{"sort": {}}]}, "enabled_custom_case_types": [], "settings": {"auto_close_inactive_cases": {}, "auto_transition_assigned_cases": {}, "integration_incident": {"field_mappings": [{}], "severity_config": {}}, "integration_jira": {"auto_creation": {}, "metadata": {}, "sync": {"properties": {"assignee": {}, "comments": {}, "description": {}, "due_date": {}, "priority": {}, "status": {}, "title": {}}}}, "integration_monitor": {}, "integration_on_call": {"escalation_queries": [{"target": {}}]}, "integration_service_now": {"auto_creation": {}, "sync_config": {"properties": {"comments": {}, "priority": {}, "status": {}}}}, "notification": {"destinations": []}}}, "type": "project"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case attributes returns "Bad Request" response
    Given new "UpdateAttributes" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case attributes returns "Not Found" response
    Given new "UpdateAttributes" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case attributes returns "OK" response
    Given new "UpdateAttributes" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case custom attribute returns "Bad Request" response
    Given new "UpdateCaseCustomAttribute" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_key" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_multi": false, "type": "NUMBER", "value": ""}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case custom attribute returns "Not Found" response
    Given new "UpdateCaseCustomAttribute" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_key" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_multi": false, "type": "NUMBER", "value": ""}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case custom attribute returns "OK" response
    Given new "UpdateCaseCustomAttribute" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And request contains "custom_attribute_key" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"is_multi": false, "type": "NUMBER", "value": ""}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case description returns "Bad Request" response
    Given new "UpdateCaseDescription" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Seeing some weird memory increase... We shouldn't ignore this"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case description returns "Not Found" response
    Given new "UpdateCaseDescription" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Seeing some weird memory increase... We shouldn't ignore this"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case description returns "OK" response
    Given new "UpdateCaseDescription" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"description": "Seeing some weird memory increase... We shouldn't ignore this"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case priority returns "Bad Request" response
    Given new "UpdatePriority" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case priority returns "Not Found" response
    Given new "UpdatePriority" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case priority returns "OK" response
    Given new "UpdatePriority" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"priority": "NOT_DEFINED"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case project returns "Bad Request" response
    Given operation "MoveCaseToProject" enabled
    And new "MoveCaseToProject" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case project returns "Not Found" response
    Given operation "MoveCaseToProject" enabled
    And new "MoveCaseToProject" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case project returns "OK" response
    Given operation "MoveCaseToProject" enabled
    And new "MoveCaseToProject" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "e555e290-ed65-49bd-ae18-8acbfcf18db7", "type": "project"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case status returns "Bad Request" response
    Given new "UpdateStatus" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"status": "OPEN", "status_name": "Open"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case status returns "Not Found" response
    Given new "UpdateStatus" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"status": "OPEN", "status_name": "Open"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case status returns "OK" response
    Given new "UpdateStatus" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"status": "OPEN", "status_name": "Open"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update case title returns "Bad Request" response
    Given new "UpdateCaseTitle" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"title": "Memory leak investigation on API"}, "type": "case"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update case title returns "Not Found" response
    Given new "UpdateCaseTitle" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"title": "Memory leak investigation on API"}, "type": "case"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update case title returns "OK" response
    Given new "UpdateCaseTitle" request
    And request contains "case_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"title": "Memory leak investigation on API"}, "type": "case"}}
    When the request is sent
    Then the response status is 200 OK
