@endpoint(agentless-scanning) @endpoint(agentless-scanning-v2)
Feature: Agentless Scanning
  Datadog Agentless Scanning provides visibility into risks and
  vulnerabilities within your hosts, running containers, and serverless
  functions—all without requiring teams to install Agents on every host or
  where Agents cannot be installed. Agentless offers also Sensitive Data
  Scanning capabilities on your storage. Go to
  https://www.datadoghq.com/blog/agentless-scanning/ to learn more.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "AgentlessScanning" API

  @generated @skip
  Scenario: Create AWS on demand task returns "AWS on demand task created successfully." response
    Given new "CreateAwsOnDemandTask" request
    And body with value {"data": {"attributes": {"arn": "arn:aws:ec2:us-east-1:727000456123:instance/i-0eabb50529b67a1ba"}, "type": "aws_resource"}}
    When the request is sent
    Then the response status is 201 AWS on demand task created successfully.

  @generated @skip
  Scenario: Create AWS on demand task returns "Bad Request" response
    Given new "CreateAwsOnDemandTask" request
    And body with value {"data": {"attributes": {"arn": "arn:aws:ec2:us-east-1:727000456123:instance/i-0eabb50529b67a1ba"}, "type": "aws_resource"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create AWS scan options returns "Agentless scan options enabled successfully." response
    Given new "CreateAwsScanOptions" request
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 201 Agentless scan options enabled successfully.

  @generated @skip
  Scenario: Create AWS scan options returns "Bad Request" response
    Given new "CreateAwsScanOptions" request
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create AWS scan options returns "Conflict" response
    Given new "CreateAwsScanOptions" request
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create Azure scan options returns "Created" response
    Given new "CreateAzureScanOptions" request
    And body with value {"data": {"attributes": {"vuln_containers_os": true, "vuln_host_os": true}, "id": "12345678-90ab-cdef-1234-567890abcdef", "type": "azure_scan_options"}}
    When the request is sent
    Then the response status is 201 Created

  @generated @skip
  Scenario: Create GCP scan options returns "Agentless scan options enabled successfully." response
    Given new "CreateGcpScanOptions" request
    And body with value {"data": {"attributes": {"vuln_containers_os": true, "vuln_host_os": true}, "id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 201 Agentless scan options enabled successfully.

  @generated @skip
  Scenario: Create GCP scan options returns "Bad Request" response
    Given new "CreateGcpScanOptions" request
    And body with value {"data": {"attributes": {"vuln_containers_os": true, "vuln_host_os": true}, "id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create GCP scan options returns "Conflict" response
    Given new "CreateGcpScanOptions" request
    And body with value {"data": {"attributes": {"vuln_containers_os": true, "vuln_host_os": true}, "id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete AWS scan options returns "Bad Request" response
    Given new "DeleteAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete AWS scan options returns "No Content" response
    Given new "DeleteAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete AWS scan options returns "Not Found" response
    Given new "DeleteAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete Azure scan options returns "No Content" response
    Given new "DeleteAzureScanOptions" request
    And request contains "subscription_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete GCP scan options returns "Bad Request" response
    Given new "DeleteGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete GCP scan options returns "No Content" response
    Given new "DeleteGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete GCP scan options returns "Not Found" response
    Given new "DeleteGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get AWS on demand task returns "Bad Request" response
    Given new "GetAwsOnDemandTask" request
    And request contains "task_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get AWS on demand task returns "Not Found" response
    Given new "GetAwsOnDemandTask" request
    And request contains "task_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get AWS on demand task returns "OK." response
    Given new "GetAwsOnDemandTask" request
    And request contains "task_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK.

  @generated @skip
  Scenario: Get AWS scan options returns "Bad Request" response
    Given new "GetAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get AWS scan options returns "Not Found" response
    Given new "GetAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get AWS scan options returns "OK" response
    Given new "GetAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get Azure scan options returns "Bad Request" response
    Given new "GetAzureScanOptions" request
    And request contains "subscription_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get Azure scan options returns "Not Found" response
    Given new "GetAzureScanOptions" request
    And request contains "subscription_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get Azure scan options returns "OK" response
    Given new "GetAzureScanOptions" request
    And request contains "subscription_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Get GCP scan options returns "Bad Request" response
    Given new "GetGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get GCP scan options returns "Not Found" response
    Given new "GetGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get GCP scan options returns "OK" response
    Given new "GetGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List AWS on demand tasks returns "OK" response
    Given new "ListAwsOnDemandTasks" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List AWS scan options returns "OK" response
    Given new "ListAwsScanOptions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List Azure scan options returns "OK" response
    Given new "ListAzureScanOptions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: List GCP scan options returns "OK" response
    Given new "ListGcpScanOptions" request
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update AWS scan options returns "Bad Request" response
    Given new "UpdateAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update AWS scan options returns "No Content" response
    Given new "UpdateAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Update AWS scan options returns "Not Found" response
    Given new "UpdateAwsScanOptions" request
    And request contains "account_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"lambda": true, "sensitive_data": false, "vuln_containers_os": true, "vuln_host_os": true}, "id": "123456789012", "type": "aws_scan_options"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update Azure scan options returns "OK" response
    Given new "UpdateAzureScanOptions" request
    And request contains "subscription_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "12345678-90ab-cdef-1234-567890abcdef", "type": "azure_scan_options"}}
    When the request is sent
    Then the response status is 200 OK

  @generated @skip
  Scenario: Update GCP scan options returns "Bad Request" response
    Given new "UpdateGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update GCP scan options returns "Not Found" response
    Given new "UpdateGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update GCP scan options returns "OK" response
    Given new "UpdateGcpScanOptions" request
    And request contains "project_id" parameter from "REPLACE.ME"
    And body with value {"data": {"id": "company-project-id", "type": "gcp_scan_options"}}
    When the request is sent
    Then the response status is 200 OK
