import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorCreateAttributes } from "./ProductAnalyticsMonitorCreateAttributes";
import { ProductAnalyticsMonitorRequestType } from "./ProductAnalyticsMonitorRequestType";

/**
 * Data of the Product Analytics monitor to create.
 */
export class ProductAnalyticsMonitorCreateData {
  /**
   * Attributes of the Product Analytics monitor to create.
   */
  "attributes": ProductAnalyticsMonitorCreateAttributes;
  /**
   * Product Analytics monitor request resource type.
   */
  "type": ProductAnalyticsMonitorRequestType;
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
      type: "ProductAnalyticsMonitorCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorRequestType",
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
    return ProductAnalyticsMonitorCreateData.attributeTypeMap;
  }

  public constructor() {}
}
