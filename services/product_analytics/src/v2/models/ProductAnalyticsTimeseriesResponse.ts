import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";
import { ProductAnalyticsTimeseriesResponseData } from "./ProductAnalyticsTimeseriesResponseData";

/**
 * Response for a timeseries analytics query.
 */
export class ProductAnalyticsTimeseriesResponse {
  "data"?: ProductAnalyticsTimeseriesResponseData;
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
      type: "ProductAnalyticsTimeseriesResponseData",
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
    return ProductAnalyticsTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
