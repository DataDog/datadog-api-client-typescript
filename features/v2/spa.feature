@endpoint(spa) @endpoint(spa-v2)
Feature: Spa
  SPA (Spark Pod Autosizing) API. Provides resource recommendations and cost
  insights to help optimize Spark job configurations.

  Background:
    Given an instance of "Spa" API

  @generated @skip
  Scenario: Get SPA Recommendations returns "Bad Request" response
    Given operation "GetSPARecommendations" enabled
    And new "GetSPARecommendations" request
    And request contains "service" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get SPA Recommendations returns "OK" response
    Given operation "GetSPARecommendations" enabled
    And new "GetSPARecommendations" request
    And request contains "service" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get SPA Recommendations with a shard parameter returns "Bad Request" response
    Given operation "GetSPARecommendationsWithShard" enabled
    And new "GetSPARecommendationsWithShard" request
    And request contains "shard" parameter from "REPLACE.ME"
    And request contains "service" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get SPA Recommendations with a shard parameter returns "OK" response
    Given operation "GetSPARecommendationsWithShard" enabled
    And new "GetSPARecommendationsWithShard" request
    And request contains "shard" parameter from "REPLACE.ME"
    And request contains "service" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK
