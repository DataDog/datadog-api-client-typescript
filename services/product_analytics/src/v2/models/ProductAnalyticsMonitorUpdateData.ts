import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorRequestType } from "./ProductAnalyticsMonitorRequestType";
import { ProductAnalyticsMonitorUpdateAttributes } from "./ProductAnalyticsMonitorUpdateAttributes";

/**
 * Data of the Product Analytics monitor update.
 */
export class ProductAnalyticsMonitorUpdateData {
  /**
   * Attributes to update on a Product Analytics monitor. Fields that are not set are left unchanged.
   * When set, `options` or `tags` replaces the stored value.
   */
  "attributes": ProductAnalyticsMonitorUpdateAttributes;
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
      type: "ProductAnalyticsMonitorUpdateAttributes",
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
    return ProductAnalyticsMonitorUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
