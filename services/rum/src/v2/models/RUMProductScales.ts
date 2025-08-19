import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMEventProcessingScale } from "./RUMEventProcessingScale";
import { RUMProductAnalyticsRetentionScale } from "./RUMProductAnalyticsRetentionScale";

/**
 * Product Scales configuration for the RUM application.
 */
export class RUMProductScales {
  /**
   * Product Analytics retention scale configuration.
   */
  "productAnalyticsRetentionScale"?: RUMProductAnalyticsRetentionScale;
  /**
   * RUM event processing scale configuration.
   */
  "rumEventProcessingScale"?: RUMEventProcessingScale;
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
    productAnalyticsRetentionScale: {
      baseName: "product_analytics_retention_scale",
      type: "RUMProductAnalyticsRetentionScale",
    },
    rumEventProcessingScale: {
      baseName: "rum_event_processing_scale",
      type: "RUMEventProcessingScale",
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
    return RUMProductScales.attributeTypeMap;
  }

  public constructor() {}
}
