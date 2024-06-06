/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSAuthConfig } from "./AWSAuthConfig";
import { AWSLogs } from "./AWSLogs";
import { AWSMetrics } from "./AWSMetrics";
import { AWSRegionsList } from "./AWSRegionsList";
import { AWSResources } from "./AWSResources";
import { AWSTraces } from "./AWSTraces";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Account attributes for creation
 */
export class AWSAccountCreateAttributes {
  /**
   * Tags to apply to all metrics in the account
   */
  "accountTags"?: Array<string>;
  /**
   * AWS Authentication config
   */
  "authConfig"?: AWSAuthConfig;
  /**
   * AWS Account ID
   */
  "awsAccountId": string;
  /**
   * AWS Regions to collect data from
   */
  "awsRegions"?: AWSRegionsList;
  /**
   * AWS Logs config
   */
  "logsConfig"?: AWSLogs;
  /**
   * AWS Metrics config
   */
  "metricsConfig"?: AWSMetrics;
  /**
   * AWS Resources config
   */
  "resourcesConfig"?: AWSResources;
  /**
   * AWS Traces config
   */
  "tracesConfig"?: AWSTraces;

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
    awsRegions: {
      baseName: "aws_regions",
      type: "AWSRegionsList",
    },
    logsConfig: {
      baseName: "logs_config",
      type: "AWSLogs",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "AWSMetrics",
    },
    resourcesConfig: {
      baseName: "resources_config",
      type: "AWSResources",
    },
    tracesConfig: {
      baseName: "traces_config",
      type: "AWSTraces",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
