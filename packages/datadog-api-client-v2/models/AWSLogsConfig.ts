/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSLambdaForwarderConfig } from "./AWSLambdaForwarderConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Logs Collection config.
 */
export class AWSLogsConfig {
  /**
   * Log Autosubscription configuration for Datadog Forwarder Lambda functions. Automatically set up triggers for existing
   * and new logs for some services, ensuring no logs from new resources are missed and saving time spent on manual configuration.
   */
  "lambdaForwarder"?: AWSLambdaForwarderConfig;

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
    lambdaForwarder: {
      baseName: "lambda_forwarder",
      type: "AWSLambdaForwarderConfig",
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
    return AWSLogsConfig.attributeTypeMap;
  }

  public constructor() {}
}
