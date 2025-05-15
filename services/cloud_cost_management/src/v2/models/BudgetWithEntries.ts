import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BudgetWithEntriesData } from "./BudgetWithEntriesData";

/**
 * The definition of the `BudgetWithEntries` object.
 */
export class BudgetWithEntries {
  /**
   * A budget and all its entries.
   */
  "data"?: BudgetWithEntriesData;
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
      type: "BudgetWithEntriesData",
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
    return BudgetWithEntries.attributeTypeMap;
  }

  public constructor() {}
}
