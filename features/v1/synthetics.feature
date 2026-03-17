@endpoint(synthetics) @endpoint(synthetics-v1)
Feature: Synthetics
  Synthetic tests use simulated requests and actions so you can monitor the
  availability and performance of systems and applications. Datadog supports
  the following types of synthetic tests: - [API
  tests](https://docs.datadoghq.com/synthetics/api_tests/) - [Browser
  tests](https://docs.datadoghq.com/synthetics/browser_tests) - [Network
  Path tests](https://docs.datadoghq.com/synthetics/network_path_tests/) -
  [Mobile Application
  tests](https://docs.datadoghq.com/synthetics/mobile_app_testing)  You can
  use the Datadog API to create, manage, and organize tests and test suites
  programmatically.  For more information, see the [Synthetic Monitoring
  documentation](https://docs.datadoghq.com/synthetics/).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "Synthetics" API

  @generated @skip
  Scenario: Create a browser test returns "- JSON format is wrong" response
    Given new "CreateSyntheticsBrowserTest" request
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Create a browser test returns "OK - Returns the created test details." response
    Given new "CreateSyntheticsBrowserTest" request
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 200 OK - Returns the created test details.

  @generated @skip
  Scenario: Create a browser test returns "Test quota is reached" response
    Given new "CreateSyntheticsBrowserTest" request
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 402 Test quota is reached

  @generated @skip
  Scenario: Create a global variable returns "Conflict" response
    Given new "CreateGlobalVariable" request
    And body with value {"attributes": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "description": "Example description", "name": "MY_VARIABLE", "parse_test_options": {"field": "content-type", "localVariableName": "LOCAL_VARIABLE", "parser": {"type": "regex", "value": ".*"}, "type": "http_body"}, "parse_test_public_id": "abc-def-123", "tags": ["team:front", "test:workflow-1"], "value": {"secure": true, "value": "value"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create a global variable returns "Invalid request" response
    Given new "CreateGlobalVariable" request
    And body with value {"attributes": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "description": "Example description", "name": "MY_VARIABLE", "parse_test_options": {"field": "content-type", "localVariableName": "LOCAL_VARIABLE", "parser": {"type": "regex", "value": ".*"}, "type": "http_body"}, "parse_test_public_id": "abc-def-123", "tags": ["team:front", "test:workflow-1"], "value": {"secure": true, "value": "value"}}
    When the request is sent
    Then the response status is 400 Invalid request

  @generated @skip
  Scenario: Create a global variable returns "OK" response
    Given new "CreateGlobalVariable" request
    And body with value {"attributes": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "description": "Example description", "name": "MY_VARIABLE", "parse_test_options": {"field": "content-type", "localVariableName": "LOCAL_VARIABLE", "parser": {"type": "regex", "value": ".*"}, "type": "http_body"}, "parse_test_public_id": "abc-def-123", "tags": ["team:front", "test:workflow-1"], "value": {"secure": true, "value": "value"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a mobile test returns "- JSON format is wrong" response
    Given new "CreateSyntheticsMobileTest" request
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Create a mobile test returns "OK - Returns the created test details." response
    Given new "CreateSyntheticsMobileTest" request
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 200 OK - Returns the created test details.

  @generated @skip
  Scenario: Create a mobile test returns "Test quota is reached" response
    Given new "CreateSyntheticsMobileTest" request
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 402 Test quota is reached

  @generated @skip
  Scenario: Create a private location returns "OK" response
    Given new "CreatePrivateLocation" request
    And body with value {"description": "Description of private location", "metadata": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "name": "New private location", "tags": ["team:front"]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Create a private location returns "Private locations are not activated for the user" response
    Given new "CreatePrivateLocation" request
    And body with value {"description": "Description of private location", "metadata": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "name": "New private location", "tags": ["team:front"]}
    When the request is sent
    Then the response status is 404 Private locations are not activated for the user

  @generated @skip
  Scenario: Create a private location returns "Quota reached for private locations" response
    Given new "CreatePrivateLocation" request
    And body with value {"description": "Description of private location", "metadata": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "name": "New private location", "tags": ["team:front"]}
    When the request is sent
    Then the response status is 402 Quota reached for private locations

  @generated @skip
  Scenario: Create an API test returns "- JSON format is wrong" response
    Given new "CreateSyntheticsAPITest" request
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Create an API test returns "OK - Returns the created test details." response
    Given new "CreateSyntheticsAPITest" request
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 200 OK - Returns the created test details.

  @generated @skip
  Scenario: Create an API test returns "Test quota is reached" response
    Given new "CreateSyntheticsAPITest" request
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 402 Test quota is reached

  @generated @skip
  Scenario: Delete a global variable returns "JSON format is wrong" response
    Given new "DeleteGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 JSON format is wrong

  @generated @skip
  Scenario: Delete a global variable returns "Not found" response
    Given new "DeleteGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Delete a global variable returns "OK" response
    Given new "DeleteGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Delete a private location returns "- Private locations are not activated for the user" response
    Given new "DeletePrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Private locations are not activated for the user

  @generated @skip
  Scenario: Delete a private location returns "OK" response
    Given new "DeletePrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 OK

  @generated @skip
  Scenario: Delete tests returns "- JSON format is wrong" response
    Given new "DeleteTests" request
    And body with value {"force_delete_dependencies": false, "public_ids": []}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Delete tests returns "- Tests to be deleted can't be found" response
    Given new "DeleteTests" request
    And body with value {"force_delete_dependencies": false, "public_ids": []}
    When the request is sent
    Then the response status is 404 - Tests to be deleted can't be found

  @generated @skip
  Scenario: Delete tests returns "OK." response
    Given new "DeleteTests" request
    And body with value {"force_delete_dependencies": false, "public_ids": []}
    When the request is sent
    Then the response status is 200 OK.

  @generated @skip
  Scenario: Edit a browser test returns "- JSON format is wrong" response
    Given new "UpdateBrowserTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Edit a browser test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "UpdateBrowserTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Edit a browser test returns "OK" response
    Given new "UpdateBrowserTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [], "configVariables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}], "request": {"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "bodyType": "text/plain", "callType": "unary", "certificate": {"cert": {}, "key": {}}, "certificateDomains": [], "files": [{}], "httpVersion": "http1", "proxy": {"url": "https://example.com"}, "service": "Greeter", "url": "https://example.com"}, "variables": [{"name": "VARIABLE_NAME", "type": "text"}]}, "locations": ["aws:eu-west-3"], "message": "", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "steps": [{"type": "assertElementContent"}], "tags": ["env:prod"], "type": "browser"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit a global variable returns "Invalid request" response
    Given new "EditGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    And body with value {"attributes": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "description": "Example description", "name": "MY_VARIABLE", "parse_test_options": {"field": "content-type", "localVariableName": "LOCAL_VARIABLE", "parser": {"type": "regex", "value": ".*"}, "type": "http_body"}, "parse_test_public_id": "abc-def-123", "tags": ["team:front", "test:workflow-1"], "value": {"secure": true, "value": "value"}}
    When the request is sent
    Then the response status is 400 Invalid request

  @generated @skip
  Scenario: Edit a global variable returns "OK" response
    Given new "EditGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    And body with value {"attributes": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "description": "Example description", "name": "MY_VARIABLE", "parse_test_options": {"field": "content-type", "localVariableName": "LOCAL_VARIABLE", "parser": {"type": "regex", "value": ".*"}, "type": "http_body"}, "parse_test_public_id": "abc-def-123", "tags": ["team:front", "test:workflow-1"], "value": {"secure": true, "value": "value"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit a mobile test returns "- JSON format is wrong" response
    Given new "UpdateMobileTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Edit a mobile test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "UpdateMobileTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Edit a mobile test returns "OK" response
    Given new "UpdateMobileTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"variables": [{"name": "VARIABLE_NAME", "secure": false, "type": "text"}]}, "device_ids": ["chrome.laptop_large"], "message": "Notification message", "name": "Example test name", "options": {"bindings": [{"principals": [], "relation": "editor"}], "ci": {"executionRule": "blocking"}, "device_ids": ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"], "mobileApplication": {"applicationId": "00000000-0000-0000-0000-aaaaaaaaaaaa", "referenceId": "00000000-0000-0000-0000-aaaaaaaaaaab", "referenceType": "latest"}, "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}, "tick_every": 300}, "status": "live", "steps": [{"name": "", "params": {"check": "equals", "direction": "up", "element": {"contextType": "native", "relativePosition": {}, "userLocator": {"values": [{"type": "accessibility-id"}]}}, "positions": [{}], "variable": {"example": "", "name": "VAR_NAME"}}, "publicId": "pub-lic-id0", "type": "assertElementContent"}], "tags": ["env:production"], "type": "mobile"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit a private location returns "- Private locations are not activated for the user" response
    Given new "UpdatePrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    And body with value {"description": "Description of private location", "metadata": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "name": "New private location", "tags": ["team:front"]}
    When the request is sent
    Then the response status is 404 - Private locations are not activated for the user

  @generated @skip
  Scenario: Edit a private location returns "OK" response
    Given new "UpdatePrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    And body with value {"description": "Description of private location", "metadata": {"restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"]}, "name": "New private location", "tags": ["team:front"]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Edit an API test returns "- JSON format is wrong" response
    Given new "UpdateAPITest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Edit an API test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "UpdateAPITest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Edit an API test returns "OK" response
    Given new "UpdateAPITest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"config": {"assertions": [{"operator": "lessThan", "target": 1000, "type": "responseTime"}], "request": {"method": "GET", "url": "https://example.com"}}, "locations": ["aws:eu-west-3"], "message": "Notification message", "name": "Example test name", "options": {"blockedRequestPatterns": [], "ci": {"executionRule": "blocking"}, "device_ids": ["chrome.laptop_large"], "httpVersion": "http1", "monitor_options": {"notification_preset_name": "show_all"}, "restricted_roles": ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"], "retry": {}, "rumSettings": {"applicationId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "clientTokenId": 12345, "isEnabled": true}, "scheduling": {"timeframes": [{"day": 1, "from": "07:00", "to": "16:00"}, {"day": 3, "from": "07:00", "to": "16:00"}], "timezone": "America/New_York"}}, "status": "live", "subtype": "http", "tags": ["env:production"], "type": "api"}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Fetch uptime for multiple tests returns "- JSON format is wrong" response
    Given new "FetchUptimes" request
    And body with value {"from_ts": 0, "public_ids": [], "to_ts": 0}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Fetch uptime for multiple tests returns "OK." response
    Given new "FetchUptimes" request
    And body with value {"from_ts": 0, "public_ids": [], "to_ts": 0}
    When the request is sent
    Then the response status is 200 OK.

  @generated @skip
  Scenario: Get a browser test result returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetBrowserTestResult" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And request contains "result_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get a browser test result returns "OK" response
    Given new "GetBrowserTestResult" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And request contains "result_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a browser test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetBrowserTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get a browser test returns "OK" response
    Given new "GetBrowserTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a browser test's latest results summaries returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetBrowserTestLatestResults" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get a browser test's latest results summaries returns "OK" response
    Given new "GetBrowserTestLatestResults" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a global variable returns "Not found" response
    Given new "GetGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Get a global variable returns "OK" response
    Given new "GetGlobalVariable" request
    And request contains "variable_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a mobile test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetMobileTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get a mobile test returns "OK" response
    Given new "GetMobileTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a private location returns "- Synthetic private locations are not activated for the user" response
    Given new "GetPrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic private locations are not activated for the user

  @generated @skip
  Scenario: Get a private location returns "OK" response
    Given new "GetPrivateLocation" request
    And request contains "location_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get a test configuration returns "- Synthetic is not activated for the user" response
    Given new "GetTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic is not activated for the user

  @generated @skip
  Scenario: Get a test configuration returns "OK" response
    Given new "GetTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all global variables returns "OK" response
    Given new "ListGlobalVariables" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get all locations (public and private) returns "OK" response
    Given new "ListLocations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an API test result returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetAPITestResult" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And request contains "result_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get an API test result returns "OK" response
    Given new "GetAPITestResult" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And request contains "result_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an API test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "GetAPITest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Get an API test returns "OK" response
    Given new "GetAPITest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get an API test's latest results summaries returns "- Synthetic is not activated for the user" response
    Given new "GetAPITestLatestResults" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 - Synthetic is not activated for the user

  @generated @skip
  Scenario: Get an API test's latest results summaries returns "OK" response
    Given new "GetAPITestLatestResults" request
    And request contains "public_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get details of batch returns "Batch does not exist." response
    Given new "GetSyntheticsCIBatch" request
    And request contains "batch_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Batch does not exist.

  @generated @skip
  Scenario: Get details of batch returns "OK" response
    Given new "GetSyntheticsCIBatch" request
    And request contains "batch_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the default locations returns "OK" response
    Given new "GetSyntheticsDefaultLocations" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get the list of all Synthetic tests returns "OK - Returns the list of all Synthetic tests." response
    Given new "ListTests" request
    When the request is sent
    Then the response status is 200 OK - Returns the list of all Synthetic tests.

  @generated @skip @with-pagination
  Scenario: Get the list of all Synthetic tests returns "OK - Returns the list of all Synthetic tests." response with pagination
    Given new "ListTests" request
    When the request with pagination is sent
    Then the response status is 200 OK - Returns the list of all Synthetic tests.

  @generated @skip
  Scenario: Get the list of all Synthetic tests returns "Synthetic Monitoring is not activated for the user." response
    Given new "ListTests" request
    When the request is sent
    Then the response status is 404 Synthetic Monitoring is not activated for the user.

  @generated @skip
  Scenario: Patch a Synthetic test returns "- JSON format is wrong" response
    Given new "PatchTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"data": [{"op": "replace", "path": "/name", "value": "New test name"}, {"op": "remove", "path": "/config/assertions/0"}]}
    When the request is sent
    Then the response status is 400 - JSON format is wrong

  @generated @skip
  Scenario: Patch a Synthetic test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "PatchTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"data": [{"op": "replace", "path": "/name", "value": "New test name"}, {"op": "remove", "path": "/config/assertions/0"}]}
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Patch a Synthetic test returns "OK" response
    Given new "PatchTest" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"data": [{"op": "replace", "path": "/name", "value": "New test name"}, {"op": "remove", "path": "/config/assertions/0"}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Pause or start a test returns "- Synthetic Monitoring is not activated for the user" response
    Given new "UpdateTestPauseStatus" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"new_status": "live"}
    When the request is sent
    Then the response status is 404 - Synthetic Monitoring is not activated for the user

  @generated @skip
  Scenario: Pause or start a test returns "JSON format is wrong." response
    Given new "UpdateTestPauseStatus" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"new_status": "live"}
    When the request is sent
    Then the response status is 400 JSON format is wrong.

  @generated @skip
  Scenario: Pause or start a test returns "OK - Returns a boolean indicating if the update was successful." response
    Given new "UpdateTestPauseStatus" request
    And request contains "public_id" parameter from "REPLACE.ME"
    And body with value {"new_status": "live"}
    When the request is sent
    Then the response status is 200 OK - Returns a boolean indicating if the update was successful.

  @generated @skip
  Scenario: Search Synthetic tests returns "Not found" response
    Given new "SearchTests" request
    When the request is sent
    Then the response status is 404 Not found

  @generated @skip
  Scenario: Search Synthetic tests returns "OK - Returns the list of Synthetic tests matching the search." response
    Given new "SearchTests" request
    When the request is sent
    Then the response status is 200 OK - Returns the list of Synthetic tests matching the search.

  @generated @skip
  Scenario: Trigger Synthetic tests returns "Bad Request" response
    Given new "TriggerTests" request
    And body with value {"tests": [{"metadata": {"ci": {"pipeline": {}, "provider": {}}, "git": {}}, "public_id": "aaa-aaa-aaa"}]}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Trigger Synthetic tests returns "OK" response
    Given new "TriggerTests" request
    And body with value {"tests": [{"metadata": {"ci": {"pipeline": {}, "provider": {}}, "git": {}}, "public_id": "aaa-aaa-aaa"}]}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Trigger tests from CI/CD pipelines returns "JSON format is wrong" response
    Given new "TriggerCITests" request
    And body with value {"tests": [{"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "deviceIds": ["chrome.laptop_large"], "locations": ["aws:eu-west-3"], "metadata": {"ci": {"pipeline": {}, "provider": {}}, "git": {}}, "public_id": "aaa-aaa-aaa", "retry": {}}]}
    When the request is sent
    Then the response status is 400 JSON format is wrong

  @generated @skip
  Scenario: Trigger tests from CI/CD pipelines returns "OK" response
    Given new "TriggerCITests" request
    And body with value {"tests": [{"basicAuth": {"password": "PaSSw0RD!", "type": "web", "username": "my_username"}, "deviceIds": ["chrome.laptop_large"], "locations": ["aws:eu-west-3"], "metadata": {"ci": {"pipeline": {}, "provider": {}}, "git": {}}, "public_id": "aaa-aaa-aaa", "retry": {}}]}
    When the request is sent
    Then the response status is 200 OK
