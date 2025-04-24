import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The entry of a budget.
 */
export class BudgetEntry {
  /**
   * The `amount` of the budget entry.
   */
  "amount"?: number;
  /**
   * The `month` of the budget entry.
   */
  "month"?: number;
  /**
   * The `tag_filters` of the budget entry.
   */
  "tagFilters"?: Array<string>;
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
    return BudgetEntry.attributeTypeMap;
  }

  public constructor() {}
}
