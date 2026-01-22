import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems } from "./BudgetWithEntriesDataAttributesEntriesItemsTagFiltersItems";

export class BudgetWithEntriesDataAttributesEntriesItems {
  "amount"?: number;
  "month"?: number;
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
