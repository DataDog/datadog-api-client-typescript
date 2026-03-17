@endpoint(status-pages) @endpoint(status-pages-v2)
Feature: Status Pages
  Manage your status pages and communicate service disruptions to
  stakeholders via Datadog's API. See the [Status Pages
  documentation](https://docs.datadoghq.com/incident_response/status_pages/)
  for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "StatusPages" API

  @generated @skip
  Scenario: Create component returns "Created" response
    Given new "CreateComponent" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Metrics Intake", "position": 0, "type": "component"}, "relationships": {"group": {"data": null}}, "type": "components"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create degradation returns "Created" response
    Given new "CreateDegradation" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"components_affected": [{"id": "1234abcd-12ab-34cd-56ef-123456abcdef", "status": "degraded"}], "description": "Our API is experiencing elevated latency. We are investigating the issue.", "status": "investigating", "title": "Elevated API Latency"}, "type": "degradations"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create status page returns "Created" response
    Given new "CreateStatusPage" request
    And body with value {"data": {"attributes": {"company_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAIKMMMM", "components": [{"name": "API", "position": 0, "type": "component"}, {"components": [{"name": "Login", "position": 0, "type": "component"}, {"name": "Settings", "position": 1, "type": "component"}], "name": "Web App", "position": 1, "type": "group"}, {"name": "Webhooks", "position": 2, "type": "component"}], "domain_prefix": "status-page-us1", "email_header_image": "data:image/png;base64,pQSLAw0KGgoAAAANSUhEUgAAAQ4AASJKFF", "enabled": true, "favicon": "data:image/png;base64,kWMRNw0KGgoAAAANSUhEUgAAAEAAAABACA", "name": "Status Page US1", "subscriptions_enabled": true, "type": "public", "visualization_type": "bars_and_uptime_percentage"}, "type": "status_pages"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Delete component returns "No Content" response
    Given new "DeleteComponent" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "component_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete degradation returns "No Content" response
    Given new "DeleteDegradation" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "degradation_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete status page returns "No Content" response
    Given new "DeleteStatusPage" request
    And request contains "page_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get component returns "OK" response
    Given new "GetComponent" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "component_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get degradation returns "OK" response
    Given new "GetDegradation" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "degradation_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get maintenance returns "OK" response
    Given new "GetMaintenance" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "maintenance_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get status page returns "OK" response
    Given new "GetStatusPage" request
    And request contains "page_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List components returns "OK" response
    Given new "ListComponents" request
    And request contains "page_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List degradations returns "OK" response
    Given new "ListDegradations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List maintenances returns "OK" response
    Given new "ListMaintenances" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List status pages returns "OK" response
    Given new "ListStatusPages" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Schedule maintenance returns "Created" response
    Given new "CreateMaintenance" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"completed_date": "2026-02-18T19:51:13.332360075Z", "completed_description": "We have completed maintenance on the API to improve performance.", "components_affected": [{"id": "1234abcd-12ab-34cd-56ef-123456abcdef", "status": "operational"}], "in_progress_description": "We are currently performing maintenance on the API to improve performance.", "scheduled_description": "We will be performing maintenance on the API to improve performance.", "start_date": "2026-02-18T19:21:13.332360075Z", "title": "API Maintenance"}, "type": "maintenances"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Update component returns "OK" response
    Given new "UpdateComponent" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "component_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Metrics Intake Service", "position": 4}, "id": "1234abcd-12ab-34cd-56ef-123456abcdef", "type": "components"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update degradation returns "OK" response
    Given new "UpdateDegradation" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "degradation_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"components_affected": [{"id": "1234abcd-12ab-34cd-56ef-123456abcdef", "status": "operational"}], "description": "We've deployed a fix and latency has returned to normal. This issue has been resolved.", "status": "resolved"}, "id": "1234abcd-12ab-34cd-56ef-123456abcdef", "type": "degradations"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update maintenance returns "OK" response
    Given new "UpdateMaintenance" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "maintenance_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"completed_date": "2026-02-18T20:01:13.332360075Z", "in_progress_description": "We are currently performing maintenance on the API to improve performance for 40 minutes.", "scheduled_description": "We will be performing maintenance on the API to improve performance for 40 minutes.", "start_date": "2026-02-18T19:21:13.332360075Z", "title": "API Maintenance"}, "id": "1234abcd-12ab-34cd-56ef-123456abcdef", "type": "maintenances"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update status page returns "OK" response
    Given new "UpdateStatusPage" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"company_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAIKMMMM", "domain_prefix": "status-page-us1-east", "email_header_image": "data:image/png;base64,pQSLAw0KGgoAAAANSUhEUgAAAQ4AASJKFF", "enabled": false, "favicon": "data:image/png;base64,kWMRNw0KGgoAAAANSUhEUgAAAEAAAABACA", "name": "Status Page US1 East", "subscriptions_enabled": false, "type": "internal", "visualization_type": "bars_only"}, "id": "1234abcd-12ab-34cd-56ef-123456abcdef", "type": "status_pages"}}
    When the request is sent
    Then the response status is 200 OK
