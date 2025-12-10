import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListDeploymentRulesDataType } from "./ListDeploymentRulesDataType";
import { ListDeploymentRulesResponseDataAttributes } from "./ListDeploymentRulesResponseDataAttributes";

/**
 * Data for a list of deployment rules.
 */
export class ListDeploymentRuleResponseData {
  "attributes": ListDeploymentRulesResponseDataAttributes;
  /**
   * Unique identifier of the deployment rule.
   */
  "id": string;
  /**
   * List deployment rule resource type.
   */
  "type": ListDeploymentRulesDataType;
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
      type: "ListDeploymentRulesResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ListDeploymentRulesDataType",
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
    return ListDeploymentRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
