import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesColorOrder } from "./TimeseriesColorOrder";
import { WidgetLineWidth } from "./WidgetLineWidth";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RunChartLineStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorOrder"?: TimeseriesColorOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "lineWidth"?: WidgetLineWidth;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorOrder: {
      baseName: "color_order",
      type: "TimeseriesColorOrder",
    },
    lineWidth: {
      baseName: "line_width",
      type: "WidgetLineWidth",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RunChartLineStyle.attributeTypeMap;
  }

  public constructor() {}
}
