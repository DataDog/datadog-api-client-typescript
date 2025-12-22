import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartWidgetDisplay } from "./BarChartWidgetDisplay";
import { BarChartWidgetScaling } from "./BarChartWidgetScaling";

/**
 * Style customization for a bar chart widget.
 */
export class BarChartWidgetStyle {
  /**
   * Bar chart widget display options.
   */
  "display"?: BarChartWidgetDisplay;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
  /**
   * Bar chart widget scaling definition.
   */
  "scaling"?: BarChartWidgetScaling;
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
    display: {
      baseName: "display",
      type: "BarChartWidgetDisplay",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    scaling: {
      baseName: "scaling",
      type: "BarChartWidgetScaling",
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
    return BarChartWidgetStyle.attributeTypeMap;
  }

  public constructor() {}
}
