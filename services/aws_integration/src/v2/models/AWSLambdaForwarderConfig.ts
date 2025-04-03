import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Log Autosubscription configuration for Datadog Forwarder Lambda functions. Automatically set up triggers for existing
 * and new logs for some services, ensuring no logs from new resources are missed and saving time spent on manual configuration.
 */
export class AWSLambdaForwarderConfig {
  /**
   * List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.
   */
  "lambdas"?: Array<string>;
  /**
   * List of service IDs set to enable automatic log collection. Discover the list of available services with the
   * [Get list of AWS log ready services](https://docs.datadoghq.com/api/latest/aws-logs-integration/#get-list-of-aws-log-ready-services) endpoint.
   */
  "sources"?: Array<string>;
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
    lambdas: {
      baseName: "lambdas",
      type: "Array<string>",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
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
    return AWSLambdaForwarderConfig.attributeTypeMap;
  }

  public constructor() {}
}
