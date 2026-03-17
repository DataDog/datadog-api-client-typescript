@endpoint(service-level-objectives) @endpoint(service-level-objectives-v1)
Feature: Service Level Objectives
  [Service Level Objectives](https://docs.datadoghq.com/monitors/service_lev
  el_objectives/#configuration) (or SLOs) are a key part of the site
  reliability engineering toolkit. SLOs provide a framework for defining
  clear targets around application performance, which ultimately help teams
  provide a consistent customer experience, balance feature development with
  platform stability, and improve communication with internal and external
  users.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ServiceLevelObjectives" API

  @generated @skip
  Scenario: Bulk Delete SLO Timeframes returns "Bad Request" response
    Given new "DeleteSLOTimeframeInBulk" request
    And body with value {"id1": ["7d", "30d"], "id2": ["7d", "30d"]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Bulk Delete SLO Timeframes returns "OK" response
    Given new "DeleteSLOTimeframeInBulk" request
    And body with value {"id1": ["7d", "30d"], "id2": ["7d", "30d"]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Check if SLOs can be safely deleted returns "Bad Request" response
    Given new "CheckCanDeleteSLO" request
    And request contains "ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Check if SLOs can be safely deleted returns "Conflict" response
    Given new "CheckCanDeleteSLO" request
    And request contains "ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Check if SLOs can be safely deleted returns "OK" response
    Given new "CheckCanDeleteSLO" request
    And request contains "ids" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create an SLO object returns "Bad Request" response
    Given new "CreateSLO" request
    And body with value {"description": null, "groups": ["env:prod", "role:mysql"], "monitor_ids": [], "name": "Custom Metric SLO", "query": {"denominator": "sum:my.custom.metric{*}.as_count()", "numerator": "sum:my.custom.metric{type:good}.as_count()"}, "sli_specification": {"time_slice": {"comparator": "<", "query": {"formulas": [{"formula": "query2/query1"}], "queries": [{"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.hits{*} by {env}.as_count()"}, {"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.errors{*} by {env}.as_count()"}]}, "threshold": 5}}, "tags": ["env:prod", "app:core"], "target_threshold": 99.9, "thresholds": [{"target": 95, "timeframe": "7d"}, {"target": 95, "timeframe": "30d", "warning": 97}], "timeframe": "30d", "type": "metric", "warning_threshold": 99.95}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an SLO object returns "OK" response
    Given new "CreateSLO" request
    And body with value {"description": null, "groups": ["env:prod", "role:mysql"], "monitor_ids": [], "name": "Custom Metric SLO", "query": {"denominator": "sum:my.custom.metric{*}.as_count()", "numerator": "sum:my.custom.metric{type:good}.as_count()"}, "sli_specification": {"time_slice": {"comparator": "<", "query": {"formulas": [{"formula": "query2/query1"}], "queries": [{"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.hits{*} by {env}.as_count()"}, {"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.errors{*} by {env}.as_count()"}]}, "threshold": 5}}, "tags": ["env:prod", "app:core"], "target_threshold": 99.9, "thresholds": [{"target": 95, "timeframe": "7d"}, {"target": 95, "timeframe": "30d", "warning": 97}], "timeframe": "30d", "type": "metric", "warning_threshold": 99.95}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete an SLO returns "Conflict" response
    Given new "DeleteSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete an SLO returns "Not found" response
    Given new "DeleteSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete an SLO returns "OK" response
    Given new "DeleteSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get Corrections For an SLO returns "Bad Request" response
    Given new "GetSLOCorrections" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Corrections For an SLO returns "Not Found" response
    Given new "GetSLOCorrections" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Corrections For an SLO returns "OK" response
    Given new "GetSLOCorrections" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all SLOs returns "Bad Request" response
    Given new "ListSLOs" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get all SLOs returns "Not Found" response
    Given new "ListSLOs" request
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all SLOs returns "OK" response
    Given new "ListSLOs" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all SLOs returns "OK" response with pagination
    Given new "ListSLOs" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an SLO's details returns "Not found" response
    Given new "GetSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get an SLO's details returns "OK" response
    Given new "GetSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an SLO's history returns "Bad Request" response
    Given new "GetSLOHistory" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an SLO's history returns "Not Found" response
    Given new "GetSLOHistory" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get an SLO's history returns "OK" response
    Given new "GetSLOHistory" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And request contains "from_ts" parameter from "REPLACE.ME"
    And request contains "to_ts" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Search for SLOs returns "Bad Request" response
    Given new "SearchSLO" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Search for SLOs returns "OK" response
    Given new "SearchSLO" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update an SLO returns "Bad Request" response
    Given new "UpdateSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "groups": ["env:prod", "role:mysql"], "monitor_ids": [], "monitor_tags": [], "name": "Custom Metric SLO", "query": {"denominator": "sum:my.custom.metric{*}.as_count()", "numerator": "sum:my.custom.metric{type:good}.as_count()"}, "sli_specification": {"time_slice": {"comparator": "<", "query": {"formulas": [{"formula": "query2/query1"}], "queries": [{"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.hits{*} by {env}.as_count()"}, {"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.errors{*} by {env}.as_count()"}]}, "threshold": 5}}, "tags": ["env:prod", "app:core"], "target_threshold": 99.9, "thresholds": [{"target": 95, "timeframe": "7d"}, {"target": 95, "timeframe": "30d", "warning": 97}], "timeframe": "30d", "type": "metric", "warning_threshold": 99.95}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an SLO returns "Not Found" response
    Given new "UpdateSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "groups": ["env:prod", "role:mysql"], "monitor_ids": [], "monitor_tags": [], "name": "Custom Metric SLO", "query": {"denominator": "sum:my.custom.metric{*}.as_count()", "numerator": "sum:my.custom.metric{type:good}.as_count()"}, "sli_specification": {"time_slice": {"comparator": "<", "query": {"formulas": [{"formula": "query2/query1"}], "queries": [{"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.hits{*} by {env}.as_count()"}, {"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.errors{*} by {env}.as_count()"}]}, "threshold": 5}}, "tags": ["env:prod", "app:core"], "target_threshold": 99.9, "thresholds": [{"target": 95, "timeframe": "7d"}, {"target": 95, "timeframe": "30d", "warning": 97}], "timeframe": "30d", "type": "metric", "warning_threshold": 99.95}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an SLO returns "OK" response
    Given new "UpdateSLO" request
    And request contains "slo_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "groups": ["env:prod", "role:mysql"], "monitor_ids": [], "monitor_tags": [], "name": "Custom Metric SLO", "query": {"denominator": "sum:my.custom.metric{*}.as_count()", "numerator": "sum:my.custom.metric{type:good}.as_count()"}, "sli_specification": {"time_slice": {"comparator": "<", "query": {"formulas": [{"formula": "query2/query1"}], "queries": [{"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.hits{*} by {env}.as_count()"}, {"data_source": "metrics", "name": "query1", "query": "sum:trace.servlet.request.errors{*} by {env}.as_count()"}]}, "threshold": 5}}, "tags": ["env:prod", "app:core"], "target_threshold": 99.9, "thresholds": [{"target": 95, "timeframe": "7d"}, {"target": 95, "timeframe": "30d", "warning": 97}], "timeframe": "30d", "type": "metric", "warning_threshold": 99.95}
    When the request is sent
    Then the response status is 200 OK
