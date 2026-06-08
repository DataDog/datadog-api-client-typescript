import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a tag indexing rule exemption.
 */
export class TagIndexingRuleExemptionCreateAttributes {
  /**
   * The reason the metric is exempt from tag indexing rules.
   */
  "reason": string;
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
    reason: {
      baseName: "reason",
      type: "string",
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
    return TagIndexingRuleExemptionCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
