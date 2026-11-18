import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * What each recommendation in the digest shows.
 */
export class CostRecommendationNotificationRuleMessageCustomizationPerRec {
  /**
   * Whether each recommendation shows its effort.
   */
  "effort"?: boolean;
  /**
   * Whether each recommendation shows its risk.
   */
  "risk"?: boolean;
  /**
   * Whether each recommendation shows why it was made.
   */
  "why"?: boolean;
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
    effort: {
      baseName: "effort",
      type: "boolean",
    },
    risk: {
      baseName: "risk",
      type: "boolean",
    },
    why: {
      baseName: "why",
      type: "boolean",
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
    return CostRecommendationNotificationRuleMessageCustomizationPerRec.attributeTypeMap;
  }

  public constructor() {}
}
