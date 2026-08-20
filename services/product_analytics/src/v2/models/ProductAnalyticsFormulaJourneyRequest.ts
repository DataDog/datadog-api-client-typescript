import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFormulaJourneyRequestData } from "./ProductAnalyticsFormulaJourneyRequestData";

/**
 * Request body for a journey timeseries query.
 */
export class ProductAnalyticsFormulaJourneyRequest {
  /**
   * The single JSON:API resource carrying a journey timeseries query. Its attributes hold the time
   * window, the bucket interval that splits it, and the journey metric to compute per bucket.
   */
  "data": ProductAnalyticsFormulaJourneyRequestData;
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
      type: "ProductAnalyticsFormulaJourneyRequestData",
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
    return ProductAnalyticsFormulaJourneyRequest.attributeTypeMap;
  }

  public constructor() {}
}
