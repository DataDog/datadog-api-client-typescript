import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for a `bits_deployment_analysis` rule.
 */
export class DeploymentGatesBitsDeploymentAnalysisRuleOptions {
  /**
   * Evaluation window in seconds. Maximum 7200 (2 hours).
   */
  "duration"?: number;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentGatesBitsDeploymentAnalysisRuleOptions.attributeTypeMap;
  }

  public constructor() {}
}
