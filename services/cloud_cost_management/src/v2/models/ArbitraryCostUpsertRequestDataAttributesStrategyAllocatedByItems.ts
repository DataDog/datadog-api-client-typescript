import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems } from "./ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems";

/**
 * The definition of `ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems` object.
 */
export class ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems {
  /**
   * The `items` `allocated_tags`.
   */
  "allocatedTags": Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>;
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
      type: "Array<ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItemsAllocatedTagsItems>",
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
    return ArbitraryCostUpsertRequestDataAttributesStrategyAllocatedByItems.attributeTypeMap;
  }

  public constructor() {}
}
