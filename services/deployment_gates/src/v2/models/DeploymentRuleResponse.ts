import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleResponseData } from "./DeploymentRuleResponseData";

/**
 * Response for a deployment rule.
 */
export class DeploymentRuleResponse {
  /**
   * Data for a deployment rule.
   */
  "data"?: DeploymentRuleResponseData;
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
      type: "DeploymentRuleResponseData",
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
    return DeploymentRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
