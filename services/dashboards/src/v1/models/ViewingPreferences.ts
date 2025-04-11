import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ViewingPreferencesTheme } from "./ViewingPreferencesTheme";

/**
 * The viewing preferences for a shared dashboard.
 */
export class ViewingPreferences {
  /**
   * Whether the widgets on the shared dashboard should be displayed with high density.
   */
  "highDensity"?: boolean;
  /**
   * The theme of the shared dashboard view. "system" follows your system's default viewing theme.
   */
  "theme"?: ViewingPreferencesTheme;
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
      type: "ViewingPreferencesTheme",
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
    return ViewingPreferences.attributeTypeMap;
  }

  public constructor() {}
}
