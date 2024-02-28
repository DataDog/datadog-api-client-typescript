/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesWidgetDefinitionType } from "./TimeseriesWidgetDefinitionType";
import { TimeseriesWidgetLegendColumn } from "./TimeseriesWidgetLegendColumn";
import { TimeseriesWidgetLegendLayout } from "./TimeseriesWidgetLegendLayout";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetEvent } from "./WidgetEvent";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The timeseries visualization allows you to display the evolution of one or more metrics, log events, or Indexed Spans over time.
 */
export class TimeseriesWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of widget events.
   */
  "events"?: Array<WidgetEvent>;
  /**
   * Columns displayed in the legend.
   */
  "legendColumns"?: Array<TimeseriesWidgetLegendColumn>;
  /**
   * Layout of the legend.
   */
  "legendLayout"?: TimeseriesWidgetLegendLayout;
  /**
   * Available legend sizes for a widget. Should be one of "0", "2", "4", "8", "16", or "auto".
   */
  "legendSize"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * List of timeseries widget requests.
   */
  "requests": Array<TimeseriesWidgetRequest>;
  /**
   * Axis controls for the widget.
   */
  "rightYaxis"?: WidgetAxis;
  /**
   * (screenboard only) Show the legend for this widget.
   */
  "showLegend"?: boolean;
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
   * Type of the timeseries widget.
   */
  "type": TimeseriesWidgetDefinitionType;
  /**
   * Axis controls for the widget.
   */
  "yaxis"?: WidgetAxis;

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
    events: {
      baseName: "events",
      type: "Array<WidgetEvent>",
    },
    legendColumns: {
      baseName: "legend_columns",
      type: "Array<TimeseriesWidgetLegendColumn>",
    },
    legendLayout: {
      baseName: "legend_layout",
      type: "TimeseriesWidgetLegendLayout",
    },
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
      type: "Array<TimeseriesWidgetRequest>",
      required: true,
    },
    rightYaxis: {
      baseName: "right_yaxis",
      type: "WidgetAxis",
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
      type: "TimeseriesWidgetDefinitionType",
      required: true,
    },
    yaxis: {
      baseName: "yaxis",
      type: "WidgetAxis",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
