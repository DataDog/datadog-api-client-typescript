/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLineType } from "./WidgetLineType";
import { WidgetLineWidth } from "./WidgetLineWidth";
import { WidgetStyleOrderBy } from "./WidgetStyleOrderBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Define request widget style for timeseries widgets.
 */
export class TimeseriesRequestStyle {
  /**
   * If true, the value is displayed as a label relative to the data point.
   */
  "hasValueLabels"?: boolean;
  /**
   * Type of lines displayed.
   */
  "lineType"?: WidgetLineType;
  /**
   * Width of line displayed.
   */
  "lineWidth"?: WidgetLineWidth;
  /**
   * How to order series in timeseries visualizations.
   * - `tags`: Order series alphabetically by tag name (default behavior)
   * - `values`: Order series by their current metric values (typically descending)
   */
  "orderBy"?: WidgetStyleOrderBy;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;

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
    hasValueLabels: {
      baseName: "has_value_labels",
      type: "boolean",
    },
    lineType: {
      baseName: "line_type",
      type: "WidgetLineType",
    },
    lineWidth: {
      baseName: "line_width",
      type: "WidgetLineWidth",
    },
    orderBy: {
      baseName: "order_by",
      type: "WidgetStyleOrderBy",
    },
    palette: {
      baseName: "palette",
      type: "string",
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
    return TimeseriesRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}
