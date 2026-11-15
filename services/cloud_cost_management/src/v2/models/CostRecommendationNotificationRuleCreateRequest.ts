import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleCreateData } from "./CostRecommendationNotificationRuleCreateData";

/**
 * Request to create a recommendation notification rule.
 */
export class CostRecommendationNotificationRuleCreateRequest {
  /**
   * A new recommendation notification rule.
   */
  "data": CostRecommendationNotificationRuleCreateData;
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
      type: "CostRecommendationNotificationRuleCreateData",
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
    return CostRecommendationNotificationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
