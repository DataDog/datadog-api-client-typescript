import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleDataType } from "./DeploymentRuleDataType";
import { DeploymentRuleResponseDataAttributes } from "./DeploymentRuleResponseDataAttributes";

/**
 * Data for a deployment rule.
 */
export class DeploymentRuleResponseData {
  /**
   * Basic information about a deployment rule.
   */
  "attributes": DeploymentRuleResponseDataAttributes;
  /**
   * Unique identifier of the deployment rule.
   */
  "id": string;
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
      type: "DeploymentRuleResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return DeploymentRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
