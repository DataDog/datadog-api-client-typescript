@endpoint(teams) @endpoint(teams-v2)
Feature: Teams
  View and manage teams within Datadog. See the [Teams
  page](https://docs.datadoghq.com/account_management/teams/) for more
  information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Teams" API

  @generated @skip
  Scenario: Add a member team returns "API error response." response
    Given operation "AddMemberTeam" enabled
    And new "AddMemberTeam" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "member_teams"}}
    When the request is sent
    Then the response status is 409 API error response.

  @generated @skip
  Scenario: Add a member team returns "Added" response
    Given operation "AddMemberTeam" enabled
    And new "AddMemberTeam" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "aeadc05e-98a8-11ec-ac2c-da7ad0900001", "type": "member_teams"}}
    When the request is sent
    Then the response status is 204 Added

  @generated @skip
  Scenario: Add a user to a team returns "API error response." response
    Given new "CreateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "relationships": {"team": {"data": {"id": "d7e15d9d-d346-43da-81d8-3d9e71d9a5e9", "type": "team"}}, "user": {"data": {"id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "users"}}}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Add a user to a team returns "API error response." response
    Given new "CreateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "relationships": {"team": {"data": {"id": "d7e15d9d-d346-43da-81d8-3d9e71d9a5e9", "type": "team"}}, "user": {"data": {"id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "users"}}}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 409 API error response.

  @generated @skip
  Scenario: Add a user to a team returns "Represents a user's association to a team" response
    Given new "CreateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "relationships": {"team": {"data": {"id": "d7e15d9d-d346-43da-81d8-3d9e71d9a5e9", "type": "team"}}, "user": {"data": {"id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "users"}}}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 200 Represents a user's association to a team

  @generated @skip
  Scenario: Create a team hierarchy link returns "Conflict" response
    Given new "AddTeamHierarchyLink" request
    And body with value {"data": {"relationships": {"parent_team": {"data": {"id": "692e8073-12c4-4c71-8408-5090bd44c9c8", "type": "team"}}, "sub_team": {"data": {"id": "692e8073-12c4-4c71-8408-5090bd44c9c8", "type": "team"}}}, "type": "team_hierarchy_links"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a team hierarchy link returns "OK" response
    Given new "AddTeamHierarchyLink" request
    And body with value {"data": {"relationships": {"parent_team": {"data": {"id": "692e8073-12c4-4c71-8408-5090bd44c9c8", "type": "team"}}, "sub_team": {"data": {"id": "692e8073-12c4-4c71-8408-5090bd44c9c8", "type": "team"}}}, "type": "team_hierarchy_links"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a team link returns "API error response." response
    Given new "CreateTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"label": "Link label", "url": "https://example.com"}, "type": "team_links"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Create a team link returns "API error response." response
    Given new "CreateTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"label": "Link label", "url": "https://example.com"}, "type": "team_links"}}
    When the request is sent
    Then the response status is 422 API error response.

  @generated @skip
  Scenario: Create a team link returns "OK" response
    Given new "CreateTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"label": "Link label", "url": "https://example.com"}, "type": "team_links"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a team returns "API error response." response
    Given new "CreateTeam" request
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"users": {"data": []}}, "type": "team"}}
    When the request is sent
    Then the response status is 409 API error response.

  @generated @skip
  Scenario: Create a team returns "CREATED" response
    Given new "CreateTeam" request
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"users": {"data": []}}, "type": "team"}}
    When the request is sent
    Then the response status is 201 CREATED

  @generated @skip
  Scenario: Create team connections returns "Bad Request" response
    Given new "CreateTeamConnections" request
    And body with value {"data": [{"attributes": {"managed_by": "github_sync", "source": "github"}, "relationships": {"connected_team": {"data": {"id": "@GitHubOrg/team-handle", "type": "github_team"}}, "team": {"data": {"id": "87654321-4321-8765-dcba-210987654321", "type": "team"}}}, "type": "team_connection"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create team connections returns "Conflict" response
    Given new "CreateTeamConnections" request
    And body with value {"data": [{"attributes": {"managed_by": "github_sync", "source": "github"}, "relationships": {"connected_team": {"data": {"id": "@GitHubOrg/team-handle", "type": "github_team"}}, "team": {"data": {"id": "87654321-4321-8765-dcba-210987654321", "type": "team"}}}, "type": "team_connection"}]}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create team connections returns "Created" response
    Given new "CreateTeamConnections" request
    And body with value {"data": [{"attributes": {"managed_by": "github_sync", "source": "github"}, "relationships": {"connected_team": {"data": {"id": "@GitHubOrg/team-handle", "type": "github_team"}}, "team": {"data": {"id": "87654321-4321-8765-dcba-210987654321", "type": "team"}}}, "type": "team_connection"}]}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create team notification rule returns "API error response." response
    Given new "CreateTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"email": {}, "ms_teams": {}, "pagerduty": {}, "slack": {}}, "id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "team_notification_rules"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Create team notification rule returns "API error response." response
    Given new "CreateTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"email": {}, "ms_teams": {}, "pagerduty": {}, "slack": {}}, "id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "team_notification_rules"}}
    When the request is sent
    Then the response status is 409 API error response.

  @generated @skip
  Scenario: Create team notification rule returns "OK" response
    Given new "CreateTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"email": {}, "ms_teams": {}, "pagerduty": {}, "slack": {}}, "id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "team_notification_rules"}}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Delete team connections returns "Bad Request" response
    Given new "DeleteTeamConnections" request
    And body with value {"data": [{"id": "12345678-1234-5678-9abc-123456789012", "type": "team_connection"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete team connections returns "No Content" response
    Given new "DeleteTeamConnections" request
    And body with value {"data": [{"id": "12345678-1234-5678-9abc-123456789012", "type": "team_connection"}]}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete team connections returns "Not Found" response
    Given new "DeleteTeamConnections" request
    And body with value {"data": [{"id": "12345678-1234-5678-9abc-123456789012", "type": "team_connection"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete team notification rule returns "API error response." response
    Given new "DeleteTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Delete team notification rule returns "No Content" response
    Given new "DeleteTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get a team hierarchy link returns "API error response." response
    Given new "GetTeamHierarchyLink" request
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get a team hierarchy link returns "OK" response
    Given new "GetTeamHierarchyLink" request
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a team link returns "API error response." response
    Given new "GetTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get a team link returns "OK" response
    Given new "GetTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a team returns "API error response." response
    Given new "GetTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get a team returns "OK" response
    Given new "GetTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all member teams returns "API error response." response
    Given operation "ListMemberTeams" enabled
    And new "ListMemberTeams" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get all member teams returns "OK" response
    Given operation "ListMemberTeams" enabled
    And new "ListMemberTeams" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all member teams returns "OK" response with pagination
    Given operation "ListMemberTeams" enabled
    And new "ListMemberTeams" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all teams returns "OK" response
    Given new "ListTeams" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all teams returns "OK" response with pagination
    Given new "ListTeams" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get links for a team returns "API error response." response
    Given new "GetTeamLinks" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get links for a team returns "OK" response
    Given new "GetTeamLinks" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get permission settings for a team returns "API error response." response
    Given new "GetTeamPermissionSettings" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get permission settings for a team returns "OK" response
    Given new "GetTeamPermissionSettings" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team hierarchy links returns "OK" response
    Given new "ListTeamHierarchyLinks" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get team hierarchy links returns "OK" response with pagination
    Given new "ListTeamHierarchyLinks" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team memberships returns "API error response." response
    Given new "GetTeamMemberships" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get team memberships returns "Represents a user's association to a team" response
    Given new "GetTeamMemberships" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Represents a user's association to a team

  @generated @skip @with-pagination
  Scenario: Get team memberships returns "Represents a user's association to a team" response with pagination
    Given new "GetTeamMemberships" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request with pagination is sent
    Then the response status is 200 Represents a user's association to a team

  @generated @skip
  Scenario: Get team notification rule returns "API error response." response
    Given new "GetTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get team notification rule returns "OK" response
    Given new "GetTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team notification rules returns "API error response." response
    Given new "GetTeamNotificationRules" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get team notification rules returns "OK" response
    Given new "GetTeamNotificationRules" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team sync configurations returns "OK" response
    Given new "GetTeamSync" request
    And request contains "filter[source]" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get team sync configurations returns "Team sync configurations not found" response
    Given new "GetTeamSync" request
    And request contains "filter[source]" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Team sync configurations not found

  @generated @skip
  Scenario: Get user memberships returns "API error response." response
    Given new "GetUserMemberships" request
    And request contains "user_uuid" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Get user memberships returns "Represents a user's association to a team" response
    Given new "GetUserMemberships" request
    And request contains "user_uuid" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 Represents a user's association to a team

  @generated @skip
  Scenario: Link Teams with GitHub Teams returns "OK" response
    Given new "SyncTeams" request
    And body with value {"data": {"attributes": {"source": "github", "type": "link"}, "type": "team_sync_bulk"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List team connections returns "Bad Request" response
    Given new "ListTeamConnections" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: List team connections returns "OK" response
    Given new "ListTeamConnections" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: List team connections returns "OK" response with pagination
    Given new "ListTeamConnections" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Remove a member team returns "API error response." response
    Given operation "RemoveMemberTeam" enabled
    And new "RemoveMemberTeam" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    And request contains "member_team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Remove a member team returns "No Content" response
    Given operation "RemoveMemberTeam" enabled
    And new "RemoveMemberTeam" request
    And request contains "super_team_id" parameter from "REPLACE.ME"
    And request contains "member_team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove a team hierarchy link returns "API error response." response
    Given new "RemoveTeamHierarchyLink" request
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Remove a team hierarchy link returns "No Content" response
    Given new "RemoveTeamHierarchyLink" request
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove a team link returns "API error response." response
    Given new "DeleteTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Remove a team link returns "No Content" response
    Given new "DeleteTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove a team returns "API error response." response
    Given new "DeleteTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Remove a team returns "No Content" response
    Given new "DeleteTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Remove a user from a team returns "API error response." response
    Given new "DeleteTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Remove a user from a team returns "No Content" response
    Given new "DeleteTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "user_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Update a team link returns "API error response." response
    Given new "UpdateTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"label": "Link label", "url": "https://example.com"}, "type": "team_links"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Update a team link returns "OK" response
    Given new "UpdateTeamLink" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "link_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"label": "Link label", "url": "https://example.com"}, "type": "team_links"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a team returns "API error response." response
    Given new "UpdateTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"team_links": {"data": [{"id": "f9bb8444-af7f-11ec-ac2c-da7ad0900001", "type": "team_links"}], "links": {"related": "/api/v2/team/c75a4a8e-20c7-11ee-a3a5-da7ad0900002/links"}}}, "type": "team"}}
    When the request is sent
    Then the response status is 400 API error response.

  @generated @skip
  Scenario: Update a team returns "API error response." response
    Given new "UpdateTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"team_links": {"data": [{"id": "f9bb8444-af7f-11ec-ac2c-da7ad0900001", "type": "team_links"}], "links": {"related": "/api/v2/team/c75a4a8e-20c7-11ee-a3a5-da7ad0900002/links"}}}, "type": "team"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Update a team returns "API error response." response
    Given new "UpdateTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"team_links": {"data": [{"id": "f9bb8444-af7f-11ec-ac2c-da7ad0900001", "type": "team_links"}], "links": {"related": "/api/v2/team/c75a4a8e-20c7-11ee-a3a5-da7ad0900002/links"}}}, "type": "team"}}
    When the request is sent
    Then the response status is 409 API error response.

  @generated @skip
  Scenario: Update a team returns "OK" response
    Given new "UpdateTeam" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"avatar": "\ud83e\udd51", "banner": null, "handle": "example-team", "hidden_modules": [], "name": "Example Team", "visible_modules": []}, "relationships": {"team_links": {"data": [{"id": "f9bb8444-af7f-11ec-ac2c-da7ad0900001", "type": "team_links"}], "links": {"related": "/api/v2/team/c75a4a8e-20c7-11ee-a3a5-da7ad0900002/links"}}}, "type": "team"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a user's membership attributes on a team returns "API error response." response
    Given new "UpdateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 400 API error response.

  @generated @skip
  Scenario: Update a user's membership attributes on a team returns "API error response." response
    Given new "UpdateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Update a user's membership attributes on a team returns "OK" response
    Given new "UpdateTeamMembership" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "user_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"role": "admin"}, "type": "team_memberships"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update permission setting for team returns "API error response." response
    Given new "UpdateTeamPermissionSetting" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "action" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"value": "admins"}, "type": "team_permission_settings"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Update permission setting for team returns "OK" response
    Given new "UpdateTeamPermissionSetting" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "action" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"value": "admins"}, "type": "team_permission_settings"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update team notification rule returns "API error response." response
    Given new "UpdateTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"email": {}, "ms_teams": {}, "pagerduty": {}, "slack": {}}, "id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "team_notification_rules"}}
    When the request is sent
    Then the response status is 404 API error response.

  @generated @skip
  Scenario: Update team notification rule returns "OK" response
    Given new "UpdateTeamNotificationRule" request
    And request contains "team_id" parameter from "REPLACE.ME"
    And request contains "rule_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"email": {}, "ms_teams": {}, "pagerduty": {}, "slack": {}}, "id": "b8626d7e-cedd-11eb-abf5-da7ad0900001", "type": "team_notification_rules"}}
    When the request is sent
    Then the response status is 200 OK
