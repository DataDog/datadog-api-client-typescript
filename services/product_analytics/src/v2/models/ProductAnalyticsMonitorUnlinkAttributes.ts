import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The chart link to remove. It must match the stored link exactly:
 * `chart_id` alone for a saved chart, or `chart_id` and `dashboard_id` for a dashboard widget.
 */
export class ProductAnalyticsMonitorUnlinkAttributes {
  /**
   * ID of the chart the monitor is linked to.
   */
  "chartId": string;
  /**
   * ID of the dashboard the monitor is linked to.
   */
  "dashboardId"?: string;
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
    chartId: {
      baseName: "chart_id",
      type: "string",
      required: true,
    },
    dashboardId: {
      baseName: "dashboard_id",
      type: "string",
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
    return ProductAnalyticsMonitorUnlinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
