import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorData } from "./ProductAnalyticsMonitorData";

/**
 * Response containing a Product Analytics monitor.
 */
export class ProductAnalyticsMonitorResponse {
  /**
   * A Product Analytics monitor.
   */
  "data": ProductAnalyticsMonitorData;
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
      type: "ProductAnalyticsMonitorData",
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
    return ProductAnalyticsMonitorResponse.attributeTypeMap;
  }

  public constructor() {}
}
