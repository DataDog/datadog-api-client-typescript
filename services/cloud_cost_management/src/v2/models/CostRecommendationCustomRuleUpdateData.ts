import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationCustomRuleType } from "./CostRecommendationCustomRuleType";
import { CostRecommendationCustomRuleUpdateAttributes } from "./CostRecommendationCustomRuleUpdateAttributes";

/**
 * Changes to a custom recommendation rule.
 */
export class CostRecommendationCustomRuleUpdateData {
  /**
   * Attributes to change. Attributes left out keep their value. `filters` and `settings` replace the stored list
   * and map when sent.
   */
  "attributes": CostRecommendationCustomRuleUpdateAttributes;
  /**
   * The ID of the custom rule. It must match the ID in the path.
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
      type: "CostRecommendationCustomRuleUpdateAttributes",
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
    return CostRecommendationCustomRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
