import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleResponseData } from "./DeploymentRuleResponseData";

/**
 * Response for a deployment gate rules.
 */
export class DeploymentGateRulesResponse {
  "data"?: Array<DeploymentRuleResponseData>;
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
    data: {
      baseName: "data",
      type: "Array<DeploymentRuleResponseData>",
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
    return DeploymentGateRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
