import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorUnlinkData } from "./ProductAnalyticsMonitorUnlinkData";

/**
 * Request to unlink a Product Analytics monitor from its chart.
 */
export class ProductAnalyticsMonitorUnlinkRequest {
  /**
   * Data of the Product Analytics monitor unlink request.
   */
  "data": ProductAnalyticsMonitorUnlinkData;
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
      type: "ProductAnalyticsMonitorUnlinkData",
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
    return ProductAnalyticsMonitorUnlinkRequest.attributeTypeMap;
  }

  public constructor() {}
}
