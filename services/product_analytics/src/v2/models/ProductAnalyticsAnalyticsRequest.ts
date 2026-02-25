import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsRequestData } from "./ProductAnalyticsAnalyticsRequestData";

/**
 * Request for computing analytics results (scalar or timeseries).
 */
export class ProductAnalyticsAnalyticsRequest {
  /**
   * Data object for an analytics request.
   */
  "data": ProductAnalyticsAnalyticsRequestData;
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
      type: "ProductAnalyticsAnalyticsRequestData",
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
    return ProductAnalyticsAnalyticsRequest.attributeTypeMap;
  }

  public constructor() {}
}
