import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";
import { ProductAnalyticsScalarResponseData } from "./ProductAnalyticsScalarResponseData";

/**
 * Response for a scalar analytics query.
 */
export class ProductAnalyticsScalarResponse {
  /**
   * Data object for a scalar response.
   */
  "data"?: ProductAnalyticsScalarResponseData;
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
      type: "ProductAnalyticsScalarResponseData",
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
    return ProductAnalyticsScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
