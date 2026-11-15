import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleAttributes } from "./CostRecommendationNotificationRuleAttributes";
import { CostRecommendationNotificationRuleType } from "./CostRecommendationNotificationRuleType";

/**
 * A recommendation notification rule.
 */
export class CostRecommendationNotificationRuleData {
  /**
   * Attributes of a recommendation notification rule.
   */
  "attributes": CostRecommendationNotificationRuleAttributes;
  /**
   * The ID of the notification rule.
   */
  "id": string;
  /**
   * Recommendation notification rule resource type.
   */
  "type": CostRecommendationNotificationRuleType;
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
      type: "CostRecommendationNotificationRuleAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostRecommendationNotificationRuleType",
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
    return CostRecommendationNotificationRuleData.attributeTypeMap;
  }

  public constructor() {}
}
