import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleDataType } from "./DeploymentRuleDataType";
import { UpdateDeploymentRuleParamsDataAttributes } from "./UpdateDeploymentRuleParamsDataAttributes";

/**
 * Parameters for updating a deployment rule.
 */
export class UpdateDeploymentRuleParamsData {
  /**
   * Parameters for updating a deployment rule.
   */
  "attributes": UpdateDeploymentRuleParamsDataAttributes;
  /**
   * Deployment rule resource type.
   */
  "type": DeploymentRuleDataType;
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
    attributes: {
      baseName: "attributes",
      type: "UpdateDeploymentRuleParamsDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DeploymentRuleDataType",
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
    return UpdateDeploymentRuleParamsData.attributeTypeMap;
  }

  public constructor() {}
}
