/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesColorOrder } from "./TimeseriesColorOrder";
import { ValueLabelsDensity } from "./ValueLabelsDensity";
import { WidgetLineType } from "./WidgetLineType";
import { WidgetLineWidth } from "./WidgetLineWidth";
import { WidgetStyleOrderBy } from "./WidgetStyleOrderBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesRequestStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorOrder"?: TimeseriesColorOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasValueLabels"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "lineType"?: WidgetLineType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "lineWidth"?: WidgetLineWidth;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderBy"?: WidgetStyleOrderBy;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "orderReverse"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "valueLabelsDensity"?: ValueLabelsDensity;

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
    orderReverse: {
      baseName: "order_reverse",
      type: "boolean",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    valueLabelsDensity: {
      baseName: "value_labels_density",
      type: "ValueLabelsDensity",
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
