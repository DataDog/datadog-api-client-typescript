/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterPlotWidgetDefinitionRequests } from "./ScatterPlotWidgetDefinitionRequests";
import { ScatterPlotWidgetDefinitionType } from "./ScatterPlotWidgetDefinitionType";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The scatter plot visualization allows you to graph a chosen scope over two different metrics with their respective aggregation.
 */
export class ScatterPlotWidgetDefinition {
  /**
   * List of groups used for colors.
   */
  "colorByGroups"?: Array<string>;
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Widget definition.
   */
  "requests": ScatterPlotWidgetDefinitionRequests;
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
   * Type of the scatter plot widget.
   */
  "type": ScatterPlotWidgetDefinitionType;
  /**
   * Axis controls for the widget.
   */
  "xaxis"?: WidgetAxis;
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
    colorByGroups: {
      baseName: "color_by_groups",
      type: "Array<string>",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    requests: {
      baseName: "requests",
      type: "ScatterPlotWidgetDefinitionRequests",
      required: true,
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
      type: "ScatterPlotWidgetDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "WidgetAxis",
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
    return ScatterPlotWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
