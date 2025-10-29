import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateDeploymentRuleParamsData } from "./UpdateDeploymentRuleParamsData";

/**
 * Parameters for updating a deployment rule.
 */
export class UpdateDeploymentRuleParams {
  /**
   * Parameters for updating a deployment rule.
   */
  "data": UpdateDeploymentRuleParamsData;
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
      type: "UpdateDeploymentRuleParamsData",
      required: true,
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
    return UpdateDeploymentRuleParams.attributeTypeMap;
  }

  public constructor() {}
}
