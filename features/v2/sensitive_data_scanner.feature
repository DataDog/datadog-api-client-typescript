@endpoint(sensitive-data-scanner) @endpoint(sensitive-data-scanner-v2)
Feature: Sensitive Data Scanner
  Create, update, delete, and retrieve sensitive data scanner groups and
  rules. See the [Sensitive Data Scanner
  page](https://docs.datadoghq.com/sensitive_data_scanner/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "SensitiveDataScanner" API

  @generated @skip
  Scenario: Create Scanning Group returns "Bad Request" response
    Given new "CreateScanningGroup" request
    And body with value {"data": {"attributes": {"filter": {}, "product_list": ["logs"], "samplings": [{"product": "logs", "rate": 100.0}]}, "relationships": {"configuration": {"data": {"type": "sensitive_data_scanner_configuration"}}, "rules": {"data": [{"type": "sensitive_data_scanner_rule"}]}}, "type": "sensitive_data_scanner_group"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Scanning Group returns "OK" response
    Given new "CreateScanningGroup" request
    And body with value {"data": {"attributes": {"filter": {}, "product_list": ["logs"], "samplings": [{"product": "logs", "rate": 100.0}]}, "relationships": {"configuration": {"data": {"type": "sensitive_data_scanner_configuration"}}, "rules": {"data": [{"type": "sensitive_data_scanner_rule"}]}}, "type": "sensitive_data_scanner_group"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Create Scanning Rule returns "Bad Request" response
    Given new "CreateScanningRule" request
    And body with value {"data": {"attributes": {"excluded_namespaces": ["admin.name"], "included_keyword_configuration": {"character_count": 30, "keywords": ["email", "address", "login"]}, "namespaces": ["admin"], "suppressions": {"ends_with": ["@example.com", "another.example.com"], "exact_match": ["admin@example.com", "user@example.com"], "starts_with": ["admin", "user"]}, "tags": [], "text_replacement": {"type": "none"}}, "relationships": {"group": {"data": {"type": "sensitive_data_scanner_group"}}, "standard_pattern": {"data": {"type": "sensitive_data_scanner_standard_pattern"}}}, "type": "sensitive_data_scanner_rule"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create Scanning Rule returns "OK" response
    Given new "CreateScanningRule" request
    And body with value {"data": {"attributes": {"excluded_namespaces": ["admin.name"], "included_keyword_configuration": {"character_count": 30, "keywords": ["email", "address", "login"]}, "namespaces": ["admin"], "suppressions": {"ends_with": ["@example.com", "another.example.com"], "exact_match": ["admin@example.com", "user@example.com"], "starts_with": ["admin", "user"]}, "tags": [], "text_replacement": {"type": "none"}}, "relationships": {"group": {"data": {"type": "sensitive_data_scanner_group"}}, "standard_pattern": {"data": {"type": "sensitive_data_scanner_standard_pattern"}}}, "type": "sensitive_data_scanner_rule"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete Scanning Group returns "Bad Request" response
    Given new "DeleteScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Scanning Group returns "Not Found" response
    Given new "DeleteScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Scanning Group returns "OK" response
    Given new "DeleteScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete Scanning Rule returns "Bad Request" response
    Given new "DeleteScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete Scanning Rule returns "Not Found" response
    Given new "DeleteScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Scanning Rule returns "OK" response
    Given new "DeleteScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"meta": {"version": 0}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Scanning Groups returns "Bad Request" response
    Given new "ListScanningGroups" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List Scanning Groups returns "OK" response
    Given new "ListScanningGroups" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List standard patterns returns "Bad Request" response
    Given new "ListStandardPatterns" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List standard patterns returns "OK" response
    Given new "ListStandardPatterns" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Reorder Groups returns "Bad Request" response
    Given new "ReorderScanningGroups" request
    And body with value {"data": {"relationships": {"groups": {"data": [{"type": "sensitive_data_scanner_group"}]}}, "type": "sensitive_data_scanner_configuration"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Reorder Groups returns "OK" response
    Given new "ReorderScanningGroups" request
    And body with value {"data": {"relationships": {"groups": {"data": [{"type": "sensitive_data_scanner_group"}]}}, "type": "sensitive_data_scanner_configuration"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Scanning Group returns "Bad Request" response
    Given new "UpdateScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"filter": {}, "product_list": ["logs"], "samplings": [{"product": "logs", "rate": 100.0}]}, "relationships": {"configuration": {"data": {"type": "sensitive_data_scanner_configuration"}}, "rules": {"data": [{"type": "sensitive_data_scanner_rule"}]}}, "type": "sensitive_data_scanner_group"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Scanning Group returns "Not Found" response
    Given new "UpdateScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"filter": {}, "product_list": ["logs"], "samplings": [{"product": "logs", "rate": 100.0}]}, "relationships": {"configuration": {"data": {"type": "sensitive_data_scanner_configuration"}}, "rules": {"data": [{"type": "sensitive_data_scanner_rule"}]}}, "type": "sensitive_data_scanner_group"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Scanning Group returns "OK" response
    Given new "UpdateScanningGroup" request
    And request contains "group_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"filter": {}, "product_list": ["logs"], "samplings": [{"product": "logs", "rate": 100.0}]}, "relationships": {"configuration": {"data": {"type": "sensitive_data_scanner_configuration"}}, "rules": {"data": [{"type": "sensitive_data_scanner_rule"}]}}, "type": "sensitive_data_scanner_group"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update Scanning Rule returns "Bad Request" response
    Given new "UpdateScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"excluded_namespaces": ["admin.name"], "included_keyword_configuration": {"character_count": 30, "keywords": ["email", "address", "login"]}, "namespaces": ["admin"], "suppressions": {"ends_with": ["@example.com", "another.example.com"], "exact_match": ["admin@example.com", "user@example.com"], "starts_with": ["admin", "user"]}, "tags": [], "text_replacement": {"type": "none"}}, "relationships": {"group": {"data": {"type": "sensitive_data_scanner_group"}}, "standard_pattern": {"data": {"type": "sensitive_data_scanner_standard_pattern"}}}, "type": "sensitive_data_scanner_rule"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update Scanning Rule returns "Not Found" response
    Given new "UpdateScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"excluded_namespaces": ["admin.name"], "included_keyword_configuration": {"character_count": 30, "keywords": ["email", "address", "login"]}, "namespaces": ["admin"], "suppressions": {"ends_with": ["@example.com", "another.example.com"], "exact_match": ["admin@example.com", "user@example.com"], "starts_with": ["admin", "user"]}, "tags": [], "text_replacement": {"type": "none"}}, "relationships": {"group": {"data": {"type": "sensitive_data_scanner_group"}}, "standard_pattern": {"data": {"type": "sensitive_data_scanner_standard_pattern"}}}, "type": "sensitive_data_scanner_rule"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Scanning Rule returns "OK" response
    Given new "UpdateScanningRule" request
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"excluded_namespaces": ["admin.name"], "included_keyword_configuration": {"character_count": 30, "keywords": ["email", "address", "login"]}, "namespaces": ["admin"], "suppressions": {"ends_with": ["@example.com", "another.example.com"], "exact_match": ["admin@example.com", "user@example.com"], "starts_with": ["admin", "user"]}, "tags": [], "text_replacement": {"type": "none"}}, "relationships": {"group": {"data": {"type": "sensitive_data_scanner_group"}}, "standard_pattern": {"data": {"type": "sensitive_data_scanner_standard_pattern"}}}, "type": "sensitive_data_scanner_rule"}, "meta": {"version": 0}}
    When the request is sent
    Then the response status is 200 OK
