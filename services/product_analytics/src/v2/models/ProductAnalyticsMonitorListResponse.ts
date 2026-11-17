import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorListData } from "./ProductAnalyticsMonitorListData";

/**
 * Response containing a list of Product Analytics monitors.
 */
export class ProductAnalyticsMonitorListResponse {
  /**
   * Data of a Product Analytics monitor list.
   */
  "data": ProductAnalyticsMonitorListData;
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
      type: "ProductAnalyticsMonitorListData",
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
    return ProductAnalyticsMonitorListResponse.attributeTypeMap;
  }

  public constructor() {}
}
