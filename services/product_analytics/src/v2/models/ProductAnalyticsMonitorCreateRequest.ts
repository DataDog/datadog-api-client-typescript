import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorCreateData } from "./ProductAnalyticsMonitorCreateData";

/**
 * Request to create a Product Analytics monitor.
 */
export class ProductAnalyticsMonitorCreateRequest {
  /**
   * Data of the Product Analytics monitor to create.
   */
  "data": ProductAnalyticsMonitorCreateData;
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
      type: "ProductAnalyticsMonitorCreateData",
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
    return ProductAnalyticsMonitorCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
