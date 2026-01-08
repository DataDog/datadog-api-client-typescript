@endpoint(status-pages) @endpoint(status-pages-v2)
Feature: Status Pages
  Auto-generated tag Status Pages

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "StatusPages" API

  @team:DataDog/incident-app
  Scenario: Create component returns "Created" response
    Given there is a valid "status_page" in the system
    And new "CreateComponent" request
    And request contains "page_id" parameter from "status_page.data.id"
    And body with value {"data": {"attributes": {"name": "{{ unique_hash }}", "position": 0, "type": "component"}, "type": "components"}}
    When the request is sent
    Then the response status is 201 Created

  @team:DataDog/incident-app
  Scenario: Create degradation returns "Created" response
    Given there is a valid "status_page" in the system
    And new "CreateDegradation" request
    And request contains "page_id" parameter from "status_page.data.id"
    And body with value {"data": {"attributes": {"components_affected": [{"id": "{{ status_page.data.attributes.components[0].id }}", "status": "major_outage"}], "description": "{{ unique_hash }}", "status": "investigating", "title": "{{ unique_hash }}"}, "type": "degradations"}}
    When the request is sent
    Then the response status is 201 Created

  @team:DataDog/incident-app
  Scenario: Create status page returns "Created" response
    Given new "CreateStatusPage" request
    And body with value {"data": {"attributes": {"name": "[DD Integration Tests] test page 3", "domain_prefix": "dd-integrations-tests-test-page-3", "enabled": true, "type": "internal", "visualization_type": "bars_and_uptime_percentage"}, "type": "status_pages"}}
    When the request is sent
    Then the response status is 201 Created

  @team:DataDog/incident-app
  Scenario: Delete component returns "No Content" response
    Given new "DeleteComponent" request
    And there is a valid "status_page" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    And request contains "component_id" parameter from "status_page.data.attributes.components[0].id"
    When the request is sent
    Then the response status is 204 No Content

  @team:DataDog/incident-app
  Scenario: Delete degradation returns "No Content" response
    Given new "DeleteDegradation" request
    And there is a valid "status_page" in the system
    And there is a valid "degradation" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    And request contains "degradation_id" parameter from "degradation.data.id"
    When the request is sent
    Then the response status is 204 No Content

  @team:DataDog/incident-app
  Scenario: Delete status page returns "No Content" response
    Given new "DeleteStatusPage" request
    And there is a valid "status_page" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    When the request is sent
    Then the response status is 204 No Content

  @team:DataDog/incident-app
  Scenario: Get component returns "OK" response
    Given new "GetComponent" request
    And there is a valid "status_page" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    And request contains "component_id" parameter from "status_page.data.attributes.components[0].id"
    When the request is sent
    Then the response status is 200 OK

  @team:DataDog/incident-app
  Scenario: Get degradation returns "OK" response
    Given new "GetDegradation" request
    And there is a valid "status_page" in the system
    And there is a valid "degradation" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    And request contains "degradation_id" parameter from "degradation.data.id"
    When the request is sent
    Then the response status is 200 OK

  @team:DataDog/incident-app
  Scenario: Get status page returns "OK" response
    Given new "GetStatusPage" request
    And there is a valid "status_page" in the system
    And request contains "page_id" parameter from "status_page.data.id"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: List components returns "OK" response
    Given new "ListComponents" request
    And request contains "page_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: List degradations returns "OK" response
    Given new "ListDegradations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: List status pages returns "OK" response
    Given new "ListStatusPages" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: Update component returns "OK" response
    Given new "UpdateComponent" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "component_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"name": "Metrics Intake Service", "position": 4}, "id": "00000000-0000-0000-0000-000000000000", "type": "components"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: Update degradation returns "OK" response
    Given new "UpdateDegradation" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And request contains "degradation_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"components_affected": [{"id": "1234abcd-12ab-34cd-56ef-123456abcdef", "status": "operational"}], "description": "We've deployed a fix and latency has returned to normal. This issue has been resolved.", "status": {"Defined": true, "Value": "resolved"}, "title": {"Defined": false, "Value": null}}, "id": "00000000-0000-0000-0000-000000000000", "type": "degradations"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @team:DataDog/incident-app
  Scenario: Update status page returns "OK" response
    Given new "UpdateStatusPage" request
    And request contains "page_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"company_logo": {"Defined": true, "Value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAIKMMMM"}, "domain_prefix": "status-page-us1-east", "email_header_image": {"Defined": true, "Value": "data:image/png;base64,pQSLAw0KGgoAAAANSUhEUgAAAQ4AASJKFF"}, "enabled": false, "favicon": {"Defined": true, "Value": "data:image/png;base64,kWMRNw0KGgoAAAANSUhEUgAAAEAAAABACA"}, "name": "Status Page US1 East", "subscriptions_enabled": false, "type": "internal", "visualization_type": "bars_only"}, "id": "00000000-0000-0000-0000-000000000000", "type": "status_pages"}}
    When the request is sent
    Then the response status is 200 OK
