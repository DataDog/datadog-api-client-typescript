import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetFormulaCellDisplayModeOptionsTrendType } from "./WidgetFormulaCellDisplayModeOptionsTrendType";
import { WidgetFormulaCellDisplayModeOptionsYScale } from "./WidgetFormulaCellDisplayModeOptionsYScale";

/**
 * Cell display mode options for the widget formula. (only if `cell_display_mode` is set to `trend`).
 */
export class WidgetFormulaCellDisplayModeOptions {
  /**
   * Trend type for the cell display mode options.
   */
  "trendType"?: WidgetFormulaCellDisplayModeOptionsTrendType;
  /**
   * Y scale for the cell display mode options.
   */
  "yScale"?: WidgetFormulaCellDisplayModeOptionsYScale;
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
    trendType: {
      baseName: "trend_type",
      type: "WidgetFormulaCellDisplayModeOptionsTrendType",
    },
    yScale: {
      baseName: "y_scale",
      type: "WidgetFormulaCellDisplayModeOptionsYScale",
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
    return WidgetFormulaCellDisplayModeOptions.attributeTypeMap;
  }

  public constructor() {}
}
