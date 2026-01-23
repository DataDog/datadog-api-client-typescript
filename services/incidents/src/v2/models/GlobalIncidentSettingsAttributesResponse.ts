import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Global incident settings attributes
 */
export class GlobalIncidentSettingsAttributesResponse {
  /**
   * The analytics dashboard ID
   */
  "analyticsDashboardId": string;
  /**
   * Timestamp when the settings were created
   */
  "created": Date;
  /**
   * Timestamp when the settings were last modified
   */
  "modified": Date;
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
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
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
    return GlobalIncidentSettingsAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
