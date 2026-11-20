/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesColorOrder } from "./TimeseriesColorOrder";
import { WidgetLineWidth } from "./WidgetLineWidth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
