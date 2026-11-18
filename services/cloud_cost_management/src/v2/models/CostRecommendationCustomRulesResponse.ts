import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleData } from "./CostRecommendationCustomRuleData";

/**
 * The custom recommendation rules of the organization.
 */
export class CostRecommendationCustomRulesResponse {
  /**
   * The custom rules, ordered by recommender and then by priority.
   */
  "data": Array<CostRecommendationCustomRuleData>;
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
      type: "Array<CostRecommendationCustomRuleData>",
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
    return CostRecommendationCustomRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
