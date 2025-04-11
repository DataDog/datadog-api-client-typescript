import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSLambdaForwarderConfig } from "./AWSLambdaForwarderConfig";

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
      type: "{ [key: string]: any; }",
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
