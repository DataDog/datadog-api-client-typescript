import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleType } from "./CostRecommendationNotificationRuleType";
import { CostRecommendationNotificationRuleUpdateAttributes } from "./CostRecommendationNotificationRuleUpdateAttributes";

/**
 * Changes to a recommendation notification rule.
 */
export class CostRecommendationNotificationRuleUpdateData {
  /**
   * Attributes to change. Attributes left out keep their value; `mention_targets` and `message_customization`
   * replace the stored value when sent.
   */
  "attributes": CostRecommendationNotificationRuleUpdateAttributes;
  /**
   * The ID of the notification rule. It must match the ID in the path.
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
      type: "CostRecommendationNotificationRuleUpdateAttributes",
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
    return CostRecommendationNotificationRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
