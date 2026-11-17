import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorUnlinkAttributes } from "./ProductAnalyticsMonitorUnlinkAttributes";
import { ProductAnalyticsMonitorUnlinkRequestType } from "./ProductAnalyticsMonitorUnlinkRequestType";

/**
 * Data of the Product Analytics monitor unlink request.
 */
export class ProductAnalyticsMonitorUnlinkData {
  /**
   * The chart link to remove. It must match the stored link exactly:
   * `chart_id` alone for a saved chart, or `chart_id` and `dashboard_id` for a dashboard widget.
   */
  "attributes": ProductAnalyticsMonitorUnlinkAttributes;
  /**
   * Product Analytics monitor unlink request resource type.
   */
  "type": ProductAnalyticsMonitorUnlinkRequestType;
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
      type: "ProductAnalyticsMonitorUnlinkAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorUnlinkRequestType",
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
    return ProductAnalyticsMonitorUnlinkData.attributeTypeMap;
  }

  public constructor() {}
}
