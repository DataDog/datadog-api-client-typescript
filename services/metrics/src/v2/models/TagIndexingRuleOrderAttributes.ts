import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the reorder operation.
 */
export class TagIndexingRuleOrderAttributes {
  /**
   * Ordered list of tag indexing rule UUIDs. The server assigns rule_order 1, 2, … matching position in this list. Must contain the UUID of every active rule in the org (at most 1,000); omitting any active rule returns a 400 error.
   */
  "ruleIds"?: Array<string>;
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
    ruleIds: {
      baseName: "rule_ids",
      type: "Array<string>",
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
    return TagIndexingRuleOrderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
