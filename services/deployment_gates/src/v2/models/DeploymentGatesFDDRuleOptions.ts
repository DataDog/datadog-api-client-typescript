import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for a `faulty_deployment_detection` rule.
 */
export class DeploymentGatesFDDRuleOptions {
  /**
   * Evaluation window in seconds. Maximum 7200 (2 hours).
   */
  "duration"?: number;
  /**
   * APM resource names to exclude from analysis.
   */
  "excludedResources"?: Array<string>;
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
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    excludedResources: {
      baseName: "excluded_resources",
      type: "Array<string>",
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
    return DeploymentGatesFDDRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
