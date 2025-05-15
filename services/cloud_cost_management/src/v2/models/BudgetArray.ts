import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Budget } from "./Budget";

/**
 * An array of budgets.
 */
export class BudgetArray {
  /**
   * The `BudgetArray` `data`.
   */
  "data"?: Array<Budget>;
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
    data: {
      baseName: "data",
      type: "Array<Budget>",
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
    return BudgetArray.attributeTypeMap;
  }

  public constructor() {}
}
