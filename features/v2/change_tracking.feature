@endpoint(change-tracking) @endpoint(change-tracking-v2)
Feature: Change Tracking
  Search for change stories — deployments, feature flag changes,
  configuration and infrastructure changes, and other detected changes —
  over a time window.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "ChangeTracking" API
    And operation "SearchChangeStories" enabled
    And new "SearchChangeStories" request


  @team:ddoghq/change-tracking
  Scenario: Search change stories returns "Bad Request" response
    Given request contains "filter[env]" parameter with value "staging"
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 400 Bad Request

  @team:ddoghq/change-tracking
  Scenario: Search change stories returns "OK" response
    Given request contains "filter[service]" parameter with value "payments-api"
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has length 3
    And the response "data[0].type" is equal to "change_story"
    And the response "data" has item with field "attributes.storyType" with value "deployment"
    And the response "data" has item with field "attributes.storyType" with value "kubernetes"
    And the response "data" has item with field "attributes.storyType" with value "database"

  @team:ddoghq/change-tracking
  Scenario: Search traffic anomaly change stories for a service and environment returns "OK" response
    Given request contains "filter[service]" parameter with value "web-store"
    And request contains "filter[env]" parameter with value "staging"
    And request contains "filter[story_type]" parameter with value ["traffic_anomaly"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has length 1
    And the response "data[0].attributes.storyType" is equal to "traffic_anomaly"
    And the response "data[0].attributes.env" is equal to "staging"
    And the response "data[0].attributes.impactedResources[0].name" is equal to "web-store"

  @team:ddoghq/change-tracking
  Scenario: Search change stories with multiple story types returns "OK" response
    Given request contains "filter[service]" parameter with value "web-store"
    And request contains "filter[env]" parameter with value "staging"
    And request contains "filter[story_type]" parameter with value ["deployment", "traffic_anomaly"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has item with field "attributes.storyType" with value "deployment"
    And the response "data" has item with field "attributes.storyType" with value "traffic_anomaly"

  @team:ddoghq/change-tracking
  Scenario: Search change stories with additional tag filters returns "OK" response
    Given request contains "filter[service]" parameter with value "web-store"
    And request contains "filter[tags]" parameter with value "env:staging"
    And request contains "filter[story_type]" parameter with value ["traffic_anomaly"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has length 1
    And the response "data[0].attributes.storyType" is equal to "traffic_anomaly"
    And the response "data[0].attributes.filterTags.env[0]" is equal to "staging"

  @team:ddoghq/change-tracking
  Scenario: Search change stories for multiple services returns "OK" response
    Given request contains "filter[service]" parameter with value "web-store,payments-api"
    And request contains "filter[story_type]" parameter with value ["deployment"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data[0].attributes.storyType" is equal to "deployment"
    And the response "data" has item with field "attributes.filterTags.service[0]" with value "web-store"
    And the response "data" has item with field "attributes.filterTags.service[0]" with value "payments-api"

  @team:ddoghq/change-tracking
  Scenario: Search frontend deployment change stories for a RUM application returns "OK" response
    Given request contains "filter[application_id]" parameter with value "4f6e1d2c-8a3b-4c5d-9e0f-1a2b3c4d5e6f"
    And request contains "filter[story_type]" parameter with value ["frontend_deployment"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data[0].attributes.storyType" is equal to "frontend_deployment"
    And the response "data[0].attributes.filterTags.application_id[0]" is equal to "4f6e1d2c-8a3b-4c5d-9e0f-1a2b3c4d5e6f"

  @team:ddoghq/change-tracking
  Scenario: Search feature flag change stories by flag returns "OK" response
    Given request contains "filter[feature_flag_id]" parameter with value "checkout-redesign"
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data[0].attributes.storyType" is equal to "feature_flag"
    And the response "data[0].attributes.filterTags.feature_flag_id[0]" is equal to "checkout-redesign"

  @team:ddoghq/change-tracking
  Scenario: Search Kubernetes change stories for a cluster and namespace returns "OK" response
    Given request contains "filter[kube_cluster]" parameter with value "cluster-a"
    And request contains "filter[kube_namespace]" parameter with value "payments"
    And request contains "filter[story_type]" parameter with value ["kubernetes"]
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has length 1
    And the response "data[0].attributes.storyType" is equal to "kubernetes"
    And the response "data[0].attributes.filterTags.kube_cluster[0]" is equal to "cluster-a"
    And the response "data[0].attributes.filterTags.kube_namespace[0]" is equal to "payments"

  @team:ddoghq/change-tracking
  Scenario: Search change stories with no matching changes returns "OK" response
    Given request contains "filter[service]" parameter with value "no-such-service"
    And request contains "start" parameter with value 1793102400000
    And request contains "end" parameter with value 1793188800000
    When the request is sent
    Then the response status is 200 OK
    And the response "data" has length 0
