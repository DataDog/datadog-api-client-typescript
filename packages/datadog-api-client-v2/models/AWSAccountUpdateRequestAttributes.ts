/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAccountPartition } from "./AWSAccountPartition";
import { AWSAuthConfig } from "./AWSAuthConfig";
import { AWSLogsConfig } from "./AWSLogsConfig";
import { AWSMetricsConfig } from "./AWSMetricsConfig";
import { AWSRegions } from "./AWSRegions";
import { AWSResourcesConfig } from "./AWSResourcesConfig";
import { AWSTracesConfig } from "./AWSTracesConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The AWS Account Integration Config to be updated.
 */
export class AWSAccountUpdateRequestAttributes {
  /**
   * Tags to apply to all hosts and metrics reporting for this account. Defaults to `[]`.
   */
  "accountTags"?: Array<string>;
  /**
   * AWS Authentication config.
   */
  "authConfig"?: AWSAuthConfig;
  /**
   * AWS Account ID.
   */
  "awsAccountId": string;
  /**
   * AWS partition your AWS account is scoped to. Defaults to `aws`.
   * See [Partitions](https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/partitions.html)
   * in the AWS documentation for more information.
   */
  "awsPartition"?: AWSAccountPartition;
  /**
   * AWS Regions to collect data from. Defaults to `include_all`.
   */
  "awsRegions"?: AWSRegions;
  /**
   * AWS Logs Collection config.
   */
  "logsConfig"?: AWSLogsConfig;
  /**
   * AWS Metrics Collection config.
   */
  "metricsConfig"?: AWSMetricsConfig;
  /**
   * AWS Resources Collection config.
   */
  "resourcesConfig"?: AWSResourcesConfig;
  /**
   * AWS Traces Collection config.
   */
  "tracesConfig"?: AWSTracesConfig;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    authConfig: {
      baseName: "auth_config",
      type: "AWSAuthConfig",
    },
    awsAccountId: {
      baseName: "aws_account_id",
      type: "string",
      required: true,
    },
    awsPartition: {
      baseName: "aws_partition",
      type: "AWSAccountPartition",
    },
    awsRegions: {
      baseName: "aws_regions",
      type: "AWSRegions",
    },
    logsConfig: {
      baseName: "logs_config",
      type: "AWSLogsConfig",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "AWSMetricsConfig",
    },
    resourcesConfig: {
      baseName: "resources_config",
      type: "AWSResourcesConfig",
    },
    tracesConfig: {
      baseName: "traces_config",
      type: "AWSTracesConfig",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
