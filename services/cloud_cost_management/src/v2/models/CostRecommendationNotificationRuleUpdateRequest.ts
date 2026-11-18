import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleUpdateData } from "./CostRecommendationNotificationRuleUpdateData";

/**
 * Request to update a recommendation notification rule.
 */
export class CostRecommendationNotificationRuleUpdateRequest {
  /**
   * Changes to a recommendation notification rule.
   */
  "data": CostRecommendationNotificationRuleUpdateData;
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
      type: "CostRecommendationNotificationRuleUpdateData",
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
    return CostRecommendationNotificationRuleUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
