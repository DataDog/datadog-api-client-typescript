import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";
import { ProductAnalyticsSankeyResponseData } from "./ProductAnalyticsSankeyResponseData";

/**
 * Response for a Sankey flow analysis.
 */
export class ProductAnalyticsSankeyResponse {
  "data"?: ProductAnalyticsSankeyResponseData;
  /**
   * Metadata for a Product Analytics query response.
   */
  "meta"?: ProductAnalyticsResponseMeta;
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
      type: "ProductAnalyticsSankeyResponseData",
    },
    meta: {
      baseName: "meta",
      type: "ProductAnalyticsResponseMeta",
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
    return ProductAnalyticsSankeyResponse.attributeTypeMap;
  }

  public constructor() {}
}
