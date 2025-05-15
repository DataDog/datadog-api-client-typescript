import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetAttributes } from "./BudgetAttributes";

/**
 * A budget and all its entries.
 */
export class BudgetWithEntriesData {
  /**
   * The attributes of a budget.
   */
  "attributes"?: BudgetAttributes;
  /**
   * The `BudgetWithEntriesData` `id`.
   */
  "id"?: string;
  /**
   * The type of the object, must be `budget`.
   */
  "type"?: string;
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
      type: "BudgetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return BudgetWithEntriesData.attributeTypeMap;
  }

  public constructor() {}
}
