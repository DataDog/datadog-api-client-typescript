import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartWidgetLegend } from "./BarChartWidgetLegend";
import { BarChartWidgetStackedType } from "./BarChartWidgetStackedType";

/**
 * Bar chart widget stacked display options.
 */
export class BarChartWidgetStacked {
  /**
   * Bar chart widget stacked legend behavior.
   */
  "legend"?: BarChartWidgetLegend;
  /**
   * Bar chart widget stacked display type.
   */
  "type": BarChartWidgetStackedType;
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
    legend: {
      baseName: "legend",
      type: "BarChartWidgetLegend",
    },
    type: {
      baseName: "type",
      type: "BarChartWidgetStackedType",
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
    return BarChartWidgetStacked.attributeTypeMap;
  }

  public constructor() {}
}
