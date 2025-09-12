import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems` object.
 */
export class ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems {
  /**
   * The `items` `key`.
   */
  "key": string;
  /**
   * The `items` `value`.
   */
  "value": string;
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
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems.attributeTypeMap;
  }

  public constructor() {}
}
