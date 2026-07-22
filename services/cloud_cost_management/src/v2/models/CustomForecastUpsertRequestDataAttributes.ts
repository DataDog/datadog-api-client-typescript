import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomForecastEntry } from "./CustomForecastEntry";

/**
 * Attributes of a custom forecast upsert request.
 */
export class CustomForecastUpsertRequestDataAttributes {
  /**
   * The UUID of the budget that this custom forecast belongs to.
   */
  "budgetUid": string;
  /**
   * Monthly custom forecast entries. An empty list deletes any existing
   * custom forecast for the budget.
   */
  "entries": Array<CustomForecastEntry>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    budgetUid: {
      baseName: "budget_uid",
      type: "string",
      required: true,
    },
    entries: {
      baseName: "entries",
      type: "Array<CustomForecastEntry>",
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
    return CustomForecastUpsertRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
