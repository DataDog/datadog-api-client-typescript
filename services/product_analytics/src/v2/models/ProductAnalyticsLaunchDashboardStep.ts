import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Dashboard linked to the launch.
 */
export class ProductAnalyticsLaunchDashboardStep {
  /**
   * ID of the linked dashboard.
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
    return ProductAnalyticsLaunchDashboardStep.attributeTypeMap;
  }

  public constructor() {}
}
