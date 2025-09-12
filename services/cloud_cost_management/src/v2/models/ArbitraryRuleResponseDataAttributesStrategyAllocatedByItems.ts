import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";

/**
 * The definition of `ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems` object.
 */
export class ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems {
  /**
   * The `items` `allocated_tags`.
   */
  "allocatedTags": Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>;
  /**
   * The `items` `percentage`. The numeric value format should be a 32bit float value.
   */
  "percentage": number;
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
    allocatedTags: {
      baseName: "allocated_tags",
      type: "Array<ArbitraryRuleResponseDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
      required: true,
    },
    percentage: {
      baseName: "percentage",
      type: "number",
      required: true,
      format: "double",
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
    return ArbitraryRuleResponseDataAttributesStrategyAllocatedByItems.attributeTypeMap;
  }

  public constructor() {}
}
