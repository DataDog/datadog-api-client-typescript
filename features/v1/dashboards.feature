@endpoint(dashboards) @endpoint(dashboards-v1)
Feature: Dashboards
  Manage all your dashboards, as well as access to your shared dashboards,
  through the API. See the [Dashboards
  page](https://docs.datadoghq.com/dashboards/) for more information.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Dashboards" API

  @generated @skip
  Scenario: Create a new dashboard returns "Bad Request" response
    Given new "CreateDashboard" request
    And body with value {"description": null, "is_read_only": false, "layout_type": "ordered", "notify_list": [], "reflow_type": "auto", "restricted_roles": [], "tags": [], "template_variable_presets": [{"template_variables": [{"values": []}]}], "template_variables": [{"available_values": ["my-host", "host1", "host2"], "default": "my-host", "defaults": ["my-host-1", "my-host-2"], "name": "host1", "prefix": "host", "type": "group"}], "title": "", "widgets": [{"definition": {"requests": {"fill": {"q": "avg:system.cpu.user{*}"}}, "type": "hostmap"}}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a new dashboard returns "OK" response
    Given new "CreateDashboard" request
    And body with value {"description": null, "is_read_only": false, "layout_type": "ordered", "notify_list": [], "reflow_type": "auto", "restricted_roles": [], "tags": [], "template_variable_presets": [{"template_variables": [{"values": []}]}], "template_variables": [{"available_values": ["my-host", "host1", "host2"], "default": "my-host", "defaults": ["my-host-1", "my-host-2"], "name": "host1", "prefix": "host", "type": "group"}], "title": "", "widgets": [{"definition": {"requests": {"fill": {"q": "avg:system.cpu.user{*}"}}, "type": "hostmap"}}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a shared dashboard returns "Bad Request" response
    Given new "CreatePublicDashboard" request
    And body with value {"dashboard_id": "123-abc-456", "dashboard_type": "custom_timeboard", "embeddable_domains": ["https://domain.atlassian.net/", "http://myserver.com/"], "expiration": null, "global_time": {"live_span": "1h"}, "global_time_selectable_enabled": null, "invitees": [{"access_expiration": "2030-01-01T12:00:00.00Z", "email": "test@datadoghq.com"}, {"access_expiration": null, "email": "test2@datadoghq.com"}], "selectable_template_vars": [{"default_value": "*", "name": "exampleVar", "prefix": "test", "visible_tags": ["selectableValue1", "selectableValue2"]}], "share_list": ["test@datadoghq.com", "test2@email.com"], "share_type": "open", "status": "active", "viewing_preferences": {"theme": "system"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create a shared dashboard returns "Dashboard Not Found" response
    Given new "CreatePublicDashboard" request
    And body with value {"dashboard_id": "123-abc-456", "dashboard_type": "custom_timeboard", "embeddable_domains": ["https://domain.atlassian.net/", "http://myserver.com/"], "expiration": null, "global_time": {"live_span": "1h"}, "global_time_selectable_enabled": null, "invitees": [{"access_expiration": "2030-01-01T12:00:00.00Z", "email": "test@datadoghq.com"}, {"access_expiration": null, "email": "test2@datadoghq.com"}], "selectable_template_vars": [{"default_value": "*", "name": "exampleVar", "prefix": "test", "visible_tags": ["selectableValue1", "selectableValue2"]}], "share_list": ["test@datadoghq.com", "test2@email.com"], "share_type": "open", "status": "active", "viewing_preferences": {"theme": "system"}}
    When the request is sent
    Then the response status is 404 Dashboard Not Found

  @generated @skip
  Scenario: Create a shared dashboard returns "OK" response
    Given new "CreatePublicDashboard" request
    And body with value {"dashboard_id": "123-abc-456", "dashboard_type": "custom_timeboard", "embeddable_domains": ["https://domain.atlassian.net/", "http://myserver.com/"], "expiration": null, "global_time": {"live_span": "1h"}, "global_time_selectable_enabled": null, "invitees": [{"access_expiration": "2030-01-01T12:00:00.00Z", "email": "test@datadoghq.com"}, {"access_expiration": null, "email": "test2@datadoghq.com"}], "selectable_template_vars": [{"default_value": "*", "name": "exampleVar", "prefix": "test", "visible_tags": ["selectableValue1", "selectableValue2"]}], "share_list": ["test@datadoghq.com", "test2@email.com"], "share_type": "open", "status": "active", "viewing_preferences": {"theme": "system"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a dashboard returns "Dashboards Not Found" response
    Given new "DeleteDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Dashboards Not Found

  @generated @skip
  Scenario: Delete a dashboard returns "OK" response
    Given new "DeleteDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete dashboards returns "Bad Request" response
    Given new "DeleteDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete dashboards returns "Dashboards Not Found" response
    Given new "DeleteDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 404 Dashboards Not Found

  @generated @skip
  Scenario: Delete dashboards returns "No Content" response
    Given new "DeleteDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Get a dashboard returns "Item Not Found" response
    Given new "GetDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Item Not Found

  @generated @skip
  Scenario: Get a dashboard returns "OK" response
    Given new "GetDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a shared dashboard returns "OK" response
    Given new "GetPublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a shared dashboard returns "Shared Dashboard Not Found" response
    Given new "GetPublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Shared Dashboard Not Found

  @generated @skip
  Scenario: Get all dashboards returns "OK" response
    Given new "ListDashboards" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip @with-pagination
  Scenario: Get all dashboards returns "OK" response with pagination
    Given new "ListDashboards" request
    When the request with pagination is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all invitations for a shared dashboard returns "Not Found" response
    Given new "GetPublicDashboardInvitations" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get all invitations for a shared dashboard returns "OK" response
    Given new "GetPublicDashboardInvitations" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Restore deleted dashboards returns "Bad Request" response
    Given new "RestoreDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Restore deleted dashboards returns "Dashboards Not Found" response
    Given new "RestoreDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 404 Dashboards Not Found

  @generated @skip
  Scenario: Restore deleted dashboards returns "No Content" response
    Given new "RestoreDashboards" request
    And body with value {"data": [{"id": "123-abc-456", "type": "dashboard"}]}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Revoke a shared dashboard URL returns "OK" response
    Given new "DeletePublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Revoke a shared dashboard URL returns "Shared Dashboard Not Found" response
    Given new "DeletePublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Shared Dashboard Not Found

  @generated @skip
  Scenario: Revoke shared dashboard invitations returns "Not Found" response
    Given new "DeletePublicDashboardInvitation" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"email": "test@datadoghq.com"}, "type": "public_dashboard_invitation"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Revoke shared dashboard invitations returns "OK" response
    Given new "DeletePublicDashboardInvitation" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"email": "test@datadoghq.com"}, "type": "public_dashboard_invitation"}]}
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Send shared dashboard invitation email returns "Bad Request" response
    Given new "SendPublicDashboardInvitation" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"email": "test@datadoghq.com"}, "type": "public_dashboard_invitation"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Send shared dashboard invitation email returns "Not Found" response
    Given new "SendPublicDashboardInvitation" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"email": "test@datadoghq.com"}, "type": "public_dashboard_invitation"}]}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Send shared dashboard invitation email returns "OK" response
    Given new "SendPublicDashboardInvitation" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"data": [{"attributes": {"email": "test@datadoghq.com"}, "type": "public_dashboard_invitation"}]}
    When the request is sent
    Then the response status is 201 OK

  @generated @skip
  Scenario: Update a dashboard returns "Bad Request" response
    Given new "UpdateDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "is_read_only": false, "layout_type": "ordered", "notify_list": [], "reflow_type": "auto", "restricted_roles": [], "tags": [], "template_variable_presets": [{"template_variables": [{"values": []}]}], "template_variables": [{"available_values": ["my-host", "host1", "host2"], "default": "my-host", "defaults": ["my-host-1", "my-host-2"], "name": "host1", "prefix": "host", "type": "group"}], "title": "", "widgets": [{"definition": {"requests": {"fill": {"q": "avg:system.cpu.user{*}"}}, "type": "hostmap"}}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a dashboard returns "Item Not Found" response
    Given new "UpdateDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "is_read_only": false, "layout_type": "ordered", "notify_list": [], "reflow_type": "auto", "restricted_roles": [], "tags": [], "template_variable_presets": [{"template_variables": [{"values": []}]}], "template_variables": [{"available_values": ["my-host", "host1", "host2"], "default": "my-host", "defaults": ["my-host-1", "my-host-2"], "name": "host1", "prefix": "host", "type": "group"}], "title": "", "widgets": [{"definition": {"requests": {"fill": {"q": "avg:system.cpu.user{*}"}}, "type": "hostmap"}}]}
    When the request is sent
    Then the response status is 404 Item Not Found

  @generated @skip
  Scenario: Update a dashboard returns "OK" response
    Given new "UpdateDashboard" request
    And request contains "dashboard_id" parameter from "REPLACE.ME"
    And body with value {"description": null, "is_read_only": false, "layout_type": "ordered", "notify_list": [], "reflow_type": "auto", "restricted_roles": [], "tags": [], "template_variable_presets": [{"template_variables": [{"values": []}]}], "template_variables": [{"available_values": ["my-host", "host1", "host2"], "default": "my-host", "defaults": ["my-host-1", "my-host-2"], "name": "host1", "prefix": "host", "type": "group"}], "title": "", "widgets": [{"definition": {"requests": {"fill": {"q": "avg:system.cpu.user{*}"}}, "type": "hostmap"}}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update a shared dashboard returns "Bad Request" response
    Given new "UpdatePublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"global_time": {"live_span": "1h"}, "share_list": ["test@datadoghq.com", "test2@datadoghq.com"], "share_type": "invite"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update a shared dashboard returns "Item Not Found" response
    Given new "UpdatePublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"global_time": {"live_span": "1h"}, "share_list": ["test@datadoghq.com", "test2@datadoghq.com"], "share_type": "invite"}
    When the request is sent
    Then the response status is 404 Item Not Found

  @generated @skip
  Scenario: Update a shared dashboard returns "OK" response
    Given new "UpdatePublicDashboard" request
    And request contains "token" parameter from "REPLACE.ME"
    And body with value {"global_time": {"live_span": "1h"}, "share_list": ["test@datadoghq.com", "test2@datadoghq.com"], "share_type": "invite"}
    When the request is sent
    Then the response status is 200 OK
