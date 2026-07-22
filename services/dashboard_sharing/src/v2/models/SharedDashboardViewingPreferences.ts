import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardViewingPreferencesTheme } from "./SharedDashboardViewingPreferencesTheme";

/**
 * Display settings for the shared dashboard.
 */
export class SharedDashboardViewingPreferences {
  /**
   * Whether widgets are displayed in high-density mode.
   */
  "highDensity": boolean;
  /**
   * The theme of the shared dashboard view. `system` follows the viewer's system default.
   */
  "theme": SharedDashboardViewingPreferencesTheme;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    highDensity: {
      baseName: "high_density",
      type: "boolean",
      required: true,
    },
    theme: {
      baseName: "theme",
      type: "SharedDashboardViewingPreferencesTheme",
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
    return SharedDashboardViewingPreferences.attributeTypeMap;
  }

  public constructor() {}
}
