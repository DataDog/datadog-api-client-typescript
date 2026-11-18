import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleCreateAttributes } from "./CostRecommendationCustomRuleCreateAttributes";
import { CostRecommendationCustomRuleType } from "./CostRecommendationCustomRuleType";

/**
 * A new custom recommendation rule.
 */
export class CostRecommendationCustomRuleCreateData {
  /**
   * Attributes of a new custom recommendation rule.
   */
  "attributes": CostRecommendationCustomRuleCreateAttributes;
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
      type: "CostRecommendationCustomRuleCreateAttributes",
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
    return CostRecommendationCustomRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
