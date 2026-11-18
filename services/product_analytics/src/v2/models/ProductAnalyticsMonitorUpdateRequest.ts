import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorUpdateData } from "./ProductAnalyticsMonitorUpdateData";

/**
 * Request to update a Product Analytics monitor.
 */
export class ProductAnalyticsMonitorUpdateRequest {
  /**
   * Data of the Product Analytics monitor update.
   */
  "data": ProductAnalyticsMonitorUpdateData;
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
      type: "ProductAnalyticsMonitorUpdateData",
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
    return ProductAnalyticsMonitorUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
