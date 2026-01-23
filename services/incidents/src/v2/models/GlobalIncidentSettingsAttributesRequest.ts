import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Global incident settings attributes
 */
export class GlobalIncidentSettingsAttributesRequest {
  /**
   * The analytics dashboard ID
   */
  "analyticsDashboardId"?: string;
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
    analyticsDashboardId: {
      baseName: "analytics_dashboard_id",
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
    return GlobalIncidentSettingsAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
