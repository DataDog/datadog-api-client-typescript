import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorAttributes } from "./ProductAnalyticsMonitorAttributes";
import { ProductAnalyticsMonitorType } from "./ProductAnalyticsMonitorType";

/**
 * A Product Analytics monitor.
 */
export class ProductAnalyticsMonitorData {
  /**
   * Attributes of a Product Analytics monitor.
   */
  "attributes": ProductAnalyticsMonitorAttributes;
  /**
   * ID of the monitor.
   */
  "id": string;
  /**
   * Product Analytics monitor resource type.
   */
  "type": ProductAnalyticsMonitorType;
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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsMonitorAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorType",
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
    return ProductAnalyticsMonitorData.attributeTypeMap;
  }

  public constructor() {}
}
