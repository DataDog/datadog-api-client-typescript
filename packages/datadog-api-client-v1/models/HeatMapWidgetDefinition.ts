/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatMapWidgetDefinitionType } from "./HeatMapWidgetDefinitionType";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetEvent } from "./WidgetEvent";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The heat map visualization shows metrics aggregated across many tags, such as hosts. The more hosts that have a particular value, the darker that square is.
 */
export class HeatMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of widget events.
   */
  "events"?: Array<WidgetEvent>;
  /**
   * Available legend sizes for a widget. Should be one of "0", "2", "4", "8", "16", or "auto".
   */
  "legendSize"?: string;
  /**
   * List of widget types.
   */
  "requests": [HeatMapWidgetRequest];
  /**
   * Whether or not to display the legend on this widget.
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
   * Type of the heat map widget.
   */
  "type": HeatMapWidgetDefinitionType;
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
    legendSize: {
      baseName: "legend_size",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "[HeatMapWidgetRequest]",
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
      type: "HeatMapWidgetDefinitionType",
      required: true,
    },
    yaxis: {
      baseName: "yaxis",
      type: "WidgetAxis",
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
    return HeatMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
