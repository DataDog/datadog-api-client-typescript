import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleCreateData } from "./CostRecommendationCustomRuleCreateData";

/**
 * Request to create a custom recommendation rule.
 */
export class CostRecommendationCustomRuleCreateRequest {
  /**
   * A new custom recommendation rule.
   */
  "data": CostRecommendationCustomRuleCreateData;
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
      type: "CostRecommendationCustomRuleCreateData",
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
    return CostRecommendationCustomRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
