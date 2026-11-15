import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleAttributes } from "./CostRecommendationCustomRuleAttributes";
import { CostRecommendationCustomRuleType } from "./CostRecommendationCustomRuleType";

/**
 * A custom recommendation rule.
 */
export class CostRecommendationCustomRuleData {
  /**
   * Attributes of a custom recommendation rule.
   */
  "attributes": CostRecommendationCustomRuleAttributes;
  /**
   * The ID of the custom rule.
   */
  "id": string;
  /**
   * Custom recommendation rule resource type.
   */
  "type": CostRecommendationCustomRuleType;
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
      type: "CostRecommendationCustomRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostRecommendationCustomRuleType",
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
    return CostRecommendationCustomRuleData.attributeTypeMap;
  }

  public constructor() {}
}
