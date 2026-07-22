import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Cost data for a single budget entry.
 */
export class BudgetWithEntriesDataAttributesEntriesItemsCosts {
  /**
   * The actual cost for this entry. Present only when `actual=true` is requested.
   */
  "actual"?: number;
  /**
   * The budgeted amount for this entry.
   */
  "amount"?: number;
  /**
   * The custom forecast override for this entry. `null` when `forecast=true` is requested but no custom forecast has been set for this entry's month. A numeric value, including `0`, indicates an explicit custom forecast override. Omitted when `forecast=false` or the feature is not available for the organization.
   */
  "customForecast"?: number;
  /**
   * The final forecast for this entry, with any custom forecast override applied. Present only when `forecast=true` is requested.
   */
  "forecast"?: number;
  /**
   * The out-of-the-box ML forecast for this entry, before custom overrides. Present only when `forecast=true` is requested.
   */
  "ootbForecast"?: number;
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
    actual: {
      baseName: "actual",
      type: "number",
      format: "double",
    },
    amount: {
      baseName: "amount",
      type: "number",
      format: "double",
    },
    customForecast: {
      baseName: "custom_forecast",
      type: "number",
      format: "double",
    },
    forecast: {
      baseName: "forecast",
      type: "number",
      format: "double",
    },
    ootbForecast: {
      baseName: "ootb_forecast",
      type: "number",
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
    return BudgetWithEntriesDataAttributesEntriesItemsCosts.attributeTypeMap;
  }

  public constructor() {}
}
