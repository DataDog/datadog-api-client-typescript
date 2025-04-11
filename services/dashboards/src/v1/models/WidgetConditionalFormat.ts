import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetComparator } from "./WidgetComparator";
import { WidgetPalette } from "./WidgetPalette";

/**
 * Define a conditional format for the widget.
 */
export class WidgetConditionalFormat {
  /**
   * Comparator to apply.
   */
  "comparator": WidgetComparator;
  /**
   * Color palette to apply to the background, same values available as palette.
   */
  "customBgColor"?: string;
  /**
   * Color palette to apply to the foreground, same values available as palette.
   */
  "customFgColor"?: string;
  /**
   * True hides values.
   */
  "hideValue"?: boolean;
  /**
   * Displays an image as the background.
   */
  "imageUrl"?: string;
  /**
   * Metric from the request to correlate this conditional format with.
   */
  "metric"?: string;
  /**
   * Color palette to apply.
   */
  "palette": WidgetPalette;
  /**
   * Defines the displayed timeframe.
   */
  "timeframe"?: string;
  /**
   * Value for the comparator.
   */
  "value": number;
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
    comparator: {
      baseName: "comparator",
      type: "WidgetComparator",
      required: true,
    },
    customBgColor: {
      baseName: "custom_bg_color",
      type: "string",
    },
    customFgColor: {
      baseName: "custom_fg_color",
      type: "string",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    imageUrl: {
      baseName: "image_url",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "WidgetPalette",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
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
    return WidgetConditionalFormat.attributeTypeMap;
  }

  public constructor() {}
}
