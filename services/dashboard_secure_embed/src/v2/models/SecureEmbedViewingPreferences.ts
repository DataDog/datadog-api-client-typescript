import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedViewingPreferencesTheme } from "./SecureEmbedViewingPreferencesTheme";

/**
 * Display settings for the secure embed shared dashboard.
 */
export class SecureEmbedViewingPreferences {
  /**
   * Whether widgets are displayed in high density mode.
   */
  "highDensity"?: boolean;
  /**
   * The theme of the shared dashboard view. `system` follows the viewer's system default.
   */
  "theme"?: SecureEmbedViewingPreferencesTheme;
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
    highDensity: {
      baseName: "high_density",
      type: "boolean",
    },
    theme: {
      baseName: "theme",
      type: "SecureEmbedViewingPreferencesTheme",
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
    return SecureEmbedViewingPreferences.attributeTypeMap;
  }

  public constructor() {}
}
