@endpoint(software-catalog) @endpoint(software-catalog-v2)
Feature: Software Catalog
  API to create, update, retrieve, and delete Software Catalog entities.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "SoftwareCatalog" API

  @generated @skip
  Scenario: Create or update entities returns "ACCEPTED" response
    Given new "UpsertCatalogEntity" request
    And body with value {"apiVersion": "v3", "datadog": {"codeLocations": [{"paths": []}], "events": [{}], "logs": [{}], "performanceData": {"tags": []}, "pipelines": {"fingerprints": []}}, "integrations": {"opsgenie": {"serviceURL": "https://www.opsgenie.com/service/shopping-cart"}, "pagerduty": {"serviceURL": "https://www.pagerduty.com/service-directory/Pshopping-cart"}}, "kind": "service", "metadata": {"additionalOwners": [{"name": ""}], "contacts": [{"contact": "https://slack/", "type": "slack"}], "id": "4b163705-23c0-4573-b2fb-f6cea2163fcb", "inheritFrom": "application:default/myapp", "links": [{"name": "mylink", "type": "link", "url": "https://mylink"}], "name": "myService", "namespace": "default", "tags": ["this:tag", "that:tag"]}, "spec": {"componentOf": [], "dependsOn": [], "languages": []}}
    When the request is sent
    Then the response status is 202 ACCEPTED

  @generated @skip
  Scenario: Create or update entities returns "Bad Request" response
    Given new "UpsertCatalogEntity" request
    And body with value {"apiVersion": "v3", "datadog": {"codeLocations": [{"paths": []}], "events": [{}], "logs": [{}], "performanceData": {"tags": []}, "pipelines": {"fingerprints": []}}, "integrations": {"opsgenie": {"serviceURL": "https://www.opsgenie.com/service/shopping-cart"}, "pagerduty": {"serviceURL": "https://www.pagerduty.com/service-directory/Pshopping-cart"}}, "kind": "service", "metadata": {"additionalOwners": [{"name": ""}], "contacts": [{"contact": "https://slack/", "type": "slack"}], "id": "4b163705-23c0-4573-b2fb-f6cea2163fcb", "inheritFrom": "application:default/myapp", "links": [{"name": "mylink", "type": "link", "url": "https://mylink"}], "name": "myService", "namespace": "default", "tags": ["this:tag", "that:tag"]}, "spec": {"componentOf": [], "dependsOn": [], "languages": []}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create or update kinds returns "ACCEPTED" response
    Given new "UpsertCatalogKind" request
    And body with value {"kind": "my-job"}
    When the request is sent
    Then the response status is 202 ACCEPTED

  @generated @skip
  Scenario: Create or update kinds returns "Bad Request" response
    Given new "UpsertCatalogKind" request
    And body with value {"kind": "my-job"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a single entity returns "Bad Request" response
    Given new "DeleteCatalogEntity" request
    And request contains "entity_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a single entity returns "Not Found" response
    Given new "DeleteCatalogEntity" request
    And request contains "entity_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a single entity returns "OK" response
    Given new "DeleteCatalogEntity" request
    And request contains "entity_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete a single kind returns "Bad Request" response
    Given new "DeleteCatalogKind" request
    And request contains "kind_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete a single kind returns "Not Found" response
    Given new "DeleteCatalogKind" request
    And request contains "kind_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete a single kind returns "OK" response
    Given new "DeleteCatalogKind" request
    And request contains "kind_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Get a list of entities returns "OK" response
    Given new "ListCatalogEntity" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of entities returns "OK" response with pagination
    Given new "ListCatalogEntity" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of entity kinds returns "Bad Request" response
    Given new "ListCatalogKind" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get a list of entity kinds returns "OK" response
    Given new "ListCatalogKind" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of entity kinds returns "OK" response with pagination
    Given new "ListCatalogKind" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a list of entity relations returns "OK" response
    Given new "ListCatalogRelation" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get a list of entity relations returns "OK" response with pagination
    Given new "ListCatalogRelation" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Preview catalog entities returns "Accepted" response
    Given new "PreviewCatalogEntities" request
    When the request is sent
    Then the response status is 202 Accepted
