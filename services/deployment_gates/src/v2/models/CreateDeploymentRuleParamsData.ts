import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDeploymentRuleParamsDataAttributes } from "./CreateDeploymentRuleParamsDataAttributes";
import { DeploymentRuleDataType } from "./DeploymentRuleDataType";

/**
 * Parameters for creating a deployment rule.
 */
export class CreateDeploymentRuleParamsData {
  /**
   * Parameters for creating a deployment rule.
   */
  "attributes": CreateDeploymentRuleParamsDataAttributes;
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
      type: "CreateDeploymentRuleParamsDataAttributes",
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
    return CreateDeploymentRuleParamsData.attributeTypeMap;
  }

  public constructor() {}
}
