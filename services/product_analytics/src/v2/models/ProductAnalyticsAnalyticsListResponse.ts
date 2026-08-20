import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListResponseData } from "./ProductAnalyticsAnalyticsListResponseData";
import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";

/**
 * Response for an analytics list query, containing individual event records.
 */
export class ProductAnalyticsAnalyticsListResponse {
  /**
   * Data object for an analytics list response.
   */
  "data": ProductAnalyticsAnalyticsListResponseData;
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
      type: "ProductAnalyticsAnalyticsListResponseData",
      required: true,
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
    return ProductAnalyticsAnalyticsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
