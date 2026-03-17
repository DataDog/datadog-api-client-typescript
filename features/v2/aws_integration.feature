@endpoint(aws-integration) @endpoint(aws-integration-v2)
Feature: AWS Integration
  Configure your Datadog-AWS integration directly through the Datadog API.
  For more information, see the [AWS integration
  page](https://docs.datadoghq.com/integrations/amazon_web_services).

  Background:
    Given a valid "apiKeyAuth" key in the system
    And a valid "appKeyAuth" key in the system
    And an instance of "AWSIntegration" API

  @generated @skip
  Scenario: Create AWS CCM config returns "AWS CCM Config object" response
    Given operation "CreateAWSAccountCCMConfig" enabled
    And new "CreateAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"ccm_config": {"data_export_configs": [{"bucket_name": "billing", "bucket_region": "us-east-1", "report_name": "cost-and-usage-report", "report_prefix": "reports", "report_type": "CUR2.0"}]}}, "type": "ccm_config"}}
    When the request is sent
    Then the response status is 200 AWS CCM Config object

  @generated @skip
  Scenario: Create AWS CCM config returns "Conflict" response
    Given operation "CreateAWSAccountCCMConfig" enabled
    And new "CreateAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"ccm_config": {"data_export_configs": [{"bucket_name": "billing", "bucket_region": "us-east-1", "report_name": "cost-and-usage-report", "report_prefix": "reports", "report_type": "CUR2.0"}]}}, "type": "ccm_config"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create AWS CCM config returns "Not Found" response
    Given operation "CreateAWSAccountCCMConfig" enabled
    And new "CreateAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"ccm_config": {"data_export_configs": [{"bucket_name": "billing", "bucket_region": "us-east-1", "report_name": "cost-and-usage-report", "report_prefix": "reports", "report_type": "CUR2.0"}]}}, "type": "ccm_config"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Create an AWS integration returns "AWS Account object" response
    Given new "CreateAWSAccount" request
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "type": "account"}}
    When the request is sent
    Then the response status is 200 AWS Account object

  @generated @skip
  Scenario: Create an AWS integration returns "Bad Request" response
    Given new "CreateAWSAccount" request
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "type": "account"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an AWS integration returns "Conflict" response
    Given new "CreateAWSAccount" request
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "type": "account"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Create an Amazon EventBridge source returns "Amazon EventBridge source created." response
    Given new "CreateAWSEventBridgeSource" request
    And body with value {"data": {"attributes": {"account_id": "123456789012", "create_event_bus": true, "event_generator_name": "app-alerts", "region": "us-east-1"}, "type": "event_bridge"}}
    When the request is sent
    Then the response status is 200 Amazon EventBridge source created.

  @generated @skip
  Scenario: Create an Amazon EventBridge source returns "Bad Request" response
    Given new "CreateAWSEventBridgeSource" request
    And body with value {"data": {"attributes": {"account_id": "123456789012", "create_event_bus": true, "event_generator_name": "app-alerts", "region": "us-east-1"}, "type": "event_bridge"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Create an Amazon EventBridge source returns "Conflict" response
    Given new "CreateAWSEventBridgeSource" request
    And body with value {"data": {"attributes": {"account_id": "123456789012", "create_event_bus": true, "event_generator_name": "app-alerts", "region": "us-east-1"}, "type": "event_bridge"}}
    When the request is sent
    Then the response status is 409 Conflict

  @generated @skip
  Scenario: Delete AWS CCM config returns "No Content" response
    Given operation "DeleteAWSAccountCCMConfig" enabled
    And new "DeleteAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete AWS CCM config returns "Not Found" response
    Given operation "DeleteAWSAccountCCMConfig" enabled
    And new "DeleteAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an AWS integration returns "Bad Request" response
    Given new "DeleteAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Delete an AWS integration returns "No Content" response
    Given new "DeleteAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 204 No Content

  @generated @skip
  Scenario: Delete an AWS integration returns "Not Found" response
    Given new "DeleteAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Delete an Amazon EventBridge source returns "Amazon EventBridge source deleted." response
    Given new "DeleteAWSEventBridgeSource" request
    And body with value {"data": {"attributes": {"account_id": "123456789012", "event_generator_name": "app-alerts-zyxw3210", "region": "us-east-1"}, "type": "event_bridge"}}
    When the request is sent
    Then the response status is 200 Amazon EventBridge source deleted.

  @generated @skip
  Scenario: Delete an Amazon EventBridge source returns "Bad Request" response
    Given new "DeleteAWSEventBridgeSource" request
    And body with value {"data": {"attributes": {"account_id": "123456789012", "event_generator_name": "app-alerts-zyxw3210", "region": "us-east-1"}, "type": "event_bridge"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Generate a new external ID returns "AWS External ID object" response
    Given new "CreateNewAWSExternalID" request
    When the request is sent
    Then the response status is 200 AWS External ID object

  @generated @skip
  Scenario: Get AWS CCM config returns "AWS CCM Config object" response
    Given operation "GetAWSAccountCCMConfig" enabled
    And new "GetAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 AWS CCM Config object

  @generated @skip
  Scenario: Get AWS CCM config returns "Not Found" response
    Given operation "GetAWSAccountCCMConfig" enabled
    And new "GetAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get AWS integration IAM permissions returns "AWS IAM Permissions object" response
    Given new "GetAWSIntegrationIAMPermissions" request
    When the request is sent
    Then the response status is 200 AWS IAM Permissions object

  @generated @skip
  Scenario: Get AWS integration standard IAM permissions returns "AWS integration standard IAM permissions." response
    Given new "GetAWSIntegrationIAMPermissionsStandard" request
    When the request is sent
    Then the response status is 200 AWS integration standard IAM permissions.

  @generated @skip
  Scenario: Get all Amazon EventBridge sources returns "Amazon EventBridge sources list." response
    Given new "ListAWSEventBridgeSources" request
    When the request is sent
    Then the response status is 200 Amazon EventBridge sources list.

  @generated @skip
  Scenario: Get all Amazon EventBridge sources returns "Bad Request" response
    Given new "ListAWSEventBridgeSources" request
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an AWS integration by config ID returns "AWS Account object" response
    Given new "GetAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 200 AWS Account object

  @generated @skip
  Scenario: Get an AWS integration by config ID returns "Bad Request" response
    Given new "GetAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Get an AWS integration by config ID returns "Not Found" response
    Given new "GetAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Get resource collection IAM permissions returns "AWS integration resource collection IAM permissions." response
    Given new "GetAWSIntegrationIAMPermissionsResourceCollection" request
    When the request is sent
    Then the response status is 200 AWS integration resource collection IAM permissions.

  @generated @skip
  Scenario: List all AWS integrations returns "AWS Accounts List object" response
    Given new "ListAWSAccounts" request
    When the request is sent
    Then the response status is 200 AWS Accounts List object

  @generated @skip
  Scenario: List available namespaces returns "AWS Namespaces List object" response
    Given new "ListAWSNamespaces" request
    When the request is sent
    Then the response status is 200 AWS Namespaces List object

  @generated @skip
  Scenario: Update AWS CCM config returns "AWS CCM Config object" response
    Given operation "UpdateAWSAccountCCMConfig" enabled
    And new "UpdateAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"ccm_config": {"data_export_configs": [{"bucket_name": "billing", "bucket_region": "us-east-1", "report_name": "cost-and-usage-report", "report_prefix": "reports", "report_type": "CUR2.0"}]}}, "type": "ccm_config"}}
    When the request is sent
    Then the response status is 200 AWS CCM Config object

  @generated @skip
  Scenario: Update AWS CCM config returns "Not Found" response
    Given operation "UpdateAWSAccountCCMConfig" enabled
    And new "UpdateAWSAccountCCMConfig" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"ccm_config": {"data_export_configs": [{"bucket_name": "billing", "bucket_region": "us-east-1", "report_name": "cost-and-usage-report", "report_prefix": "reports", "report_type": "CUR2.0"}]}}, "type": "ccm_config"}}
    When the request is sent
    Then the response status is 404 Not Found

  @generated @skip
  Scenario: Update an AWS integration returns "AWS Account object" response
    Given new "UpdateAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "id": "00000000-abcd-0001-0000-000000000000", "type": "account"}}
    When the request is sent
    Then the response status is 200 AWS Account object

  @generated @skip
  Scenario: Update an AWS integration returns "Bad Request" response
    Given new "UpdateAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "id": "00000000-abcd-0001-0000-000000000000", "type": "account"}}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip
  Scenario: Update an AWS integration returns "Not Found" response
    Given new "UpdateAWSAccount" request
    And request contains "aws_account_config_id" parameter from "REPLACE.ME"
    And body with value {"data": {"attributes": {"account_tags": ["env:prod"], "auth_config": {"access_key_id": "AKIAIOSFODNN7EXAMPLE", "secret_access_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"}, "aws_account_id": "123456789012", "aws_partition": "aws", "aws_regions": {"include_all": true}, "logs_config": {"lambda_forwarder": {"lambdas": ["arn:aws:lambda:us-east-1:123456789012:function:DatadogLambdaLogForwarder"], "log_source_config": {"tag_filters": [{"source": "s3", "tags": ["env:prod"]}]}, "sources": ["s3"]}}, "metrics_config": {"automute_enabled": true, "collect_cloudwatch_alarms": false, "collect_custom_metrics": false, "enabled": true, "namespace_filters": {"exclude_only": ["AWS/SQS", "AWS/ElasticMapReduce", "AWS/Usage"]}, "tag_filters": [{"namespace": "AWS/EC2", "tags": ["datadog:true"]}]}, "resources_config": {"cloud_security_posture_management_collection": false, "extended_collection": true}, "traces_config": {"xray_services": {"include_all": false}}}, "id": "00000000-abcd-0001-0000-000000000000", "type": "account"}}
    When the request is sent
    Then the response status is 404 Not Found
