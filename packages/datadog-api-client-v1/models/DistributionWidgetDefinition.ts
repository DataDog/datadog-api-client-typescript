/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DistributionWidgetDefinitionType } from "./DistributionWidgetDefinitionType";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../util";

/**
 * The Distribution visualization is another way of showing metrics aggregated across one or several tags, such as hosts. Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
 */
export class DistributionWidgetDefinition {
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "legendSize"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<DistributionWidgetRequest>;
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "showLegend"?: boolean;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of the widget.
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
   * Type of the distribution widget.
   */
  "type": DistributionWidgetDefinitionType;
  /**
   * X Axis controls for the distribution widget.
   */
  "xaxis"?: DistributionWidgetXAxis;
  /**
   * Y Axis controls for the distribution widget.
   */
  "yaxis"?: DistributionWidgetYAxis;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    legendSize: {
      baseName: "legend_size",
      type: "string",
    },
    markers: {
      baseName: "markers",
      type: "Array<WidgetMarker>",
    },
    requests: {
      baseName: "requests",
      type: "Array<DistributionWidgetRequest>",
      required: true,
    },
    showLegend: {
      baseName: "show_legend",
      type: "boolean",
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
      type: "DistributionWidgetDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "DistributionWidgetXAxis",
    },
    yaxis: {
      baseName: "yaxis",
      type: "DistributionWidgetYAxis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
