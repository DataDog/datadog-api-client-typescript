import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsAnalyticsListRequestData } from "./ProductAnalyticsAnalyticsListRequestData";

/**
 * Request for listing the individual event records matching an analytics query.
 */
export class ProductAnalyticsAnalyticsListRequest {
  /**
   * Data object for an analytics list request.
   */
  "data": ProductAnalyticsAnalyticsListRequestData;
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
      type: "ProductAnalyticsAnalyticsListRequestData",
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
    return ProductAnalyticsAnalyticsListRequest.attributeTypeMap;
  }

  public constructor() {}
}
