import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleData } from "./CostRecommendationCustomRuleData";

/**
 * A custom recommendation rule.
 */
export class CostRecommendationCustomRuleResponse {
  /**
   * A custom recommendation rule.
   */
  "data": CostRecommendationCustomRuleData;
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
      type: "CostRecommendationCustomRuleData",
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
    return CostRecommendationCustomRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
