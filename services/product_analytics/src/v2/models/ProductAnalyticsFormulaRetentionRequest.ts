import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFormulaRetentionRequestData } from "./ProductAnalyticsFormulaRetentionRequestData";

/**
 * Request body for a retention scalar or retention timeseries query.
 */
export class ProductAnalyticsFormulaRetentionRequest {
  /**
   * The single JSON:API resource carrying a retention scalar or timeseries query. Its attributes
   * hold the time window to query and the retention query definition to evaluate.
   */
  "data": ProductAnalyticsFormulaRetentionRequestData;
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
      type: "ProductAnalyticsFormulaRetentionRequestData",
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
    return ProductAnalyticsFormulaRetentionRequest.attributeTypeMap;
  }

  public constructor() {}
}
