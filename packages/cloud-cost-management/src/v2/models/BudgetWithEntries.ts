import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { BudgetWithEntriesData } from "./BudgetWithEntriesData";
import { BudgetWithEntriesMeta } from "./BudgetWithEntriesMeta";

/**
 * The definition of the `BudgetWithEntries` object.
 */
export class BudgetWithEntries {
  /**
   * A budget and all its entries.
   */
  "data"?: BudgetWithEntriesData;
  /**
   * Additional information about errors encountered while retrieving budget cost data.
   */
  "meta"?: BudgetWithEntriesMeta;
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
    meta: {
      baseName: "meta",
      type: "BudgetWithEntriesMeta",
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
