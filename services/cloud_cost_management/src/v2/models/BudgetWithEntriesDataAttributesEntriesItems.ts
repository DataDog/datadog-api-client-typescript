import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems } from "./BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems";

/**
 * A single monthly budget entry defining the allocated amount and optional tag filters for a specific month.
 */
export class BudgetWithEntriesDataAttributesEntriesItems {
  /**
   * The budgeted amount for this entry.
   */
  "amount"?: number;
  /**
   * The month this budget entry applies to, in YYYYMM format.
   */
  "month"?: number;
  /**
   * The list of tag filters that scope this budget entry to specific resources.
   */
  "tagFilters"?: Array<BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems>;
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
    amount: {
      baseName: "amount",
      type: "number",
      format: "double",
    },
    month: {
      baseName: "month",
      type: "number",
      format: "int64",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems>",
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
    return BudgetWithEntriesDataAttributesEntriesItems.attributeTypeMap;
  }

  public constructor() {}
}
