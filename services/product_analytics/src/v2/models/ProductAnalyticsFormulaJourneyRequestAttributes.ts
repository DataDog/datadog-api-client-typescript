import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFormulaJourneyQuery } from "./ProductAnalyticsFormulaJourneyQuery";

/**
 * Attributes of a journey timeseries request.
 */
export class ProductAnalyticsFormulaJourneyRequestAttributes {
  /**
   * Start of the query window, in epoch milliseconds.
   */
  "from": number;
  /**
   * Time bucket interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Query definition for a journey timeseries request.
   */
  "query": ProductAnalyticsFormulaJourneyQuery;
  /**
   * End of the query window, in epoch milliseconds.
   */
  "to": number;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "ProductAnalyticsFormulaJourneyQuery",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsFormulaJourneyRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
