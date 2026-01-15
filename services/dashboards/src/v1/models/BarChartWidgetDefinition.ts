import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartWidgetDefinitionType } from "./BarChartWidgetDefinitionType";
import { BarChartWidgetRequest } from "./BarChartWidgetRequest";
import { BarChartWidgetStyle } from "./BarChartWidgetStyle";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The bar chart visualization displays categorical data using vertical bars, allowing you to compare values across different groups.
 */
export class BarChartWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of bar chart widget requests.
   */
  "requests": [BarChartWidgetRequest];
  /**
   * Style customization for a bar chart widget.
   */
  "style"?: BarChartWidgetStyle;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the bar chart widget.
   */
  "type": BarChartWidgetDefinitionType;
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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    requests: {
      baseName: "requests",
      type: "[BarChartWidgetRequest]",
      required: true,
    },
    style: {
      baseName: "style",
      type: "BarChartWidgetStyle",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BarChartWidgetDefinitionType",
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
    return BarChartWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
