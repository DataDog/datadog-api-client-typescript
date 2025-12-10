import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListDeploymentRuleResponseData } from "./ListDeploymentRuleResponseData";

/**
 * Response for a deployment gate rules.
 */
export class DeploymentGateRulesResponse {
  /**
   * Data for a list of deployment rules.
   */
  "data"?: ListDeploymentRuleResponseData;
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
      type: "ListDeploymentRuleResponseData",
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
