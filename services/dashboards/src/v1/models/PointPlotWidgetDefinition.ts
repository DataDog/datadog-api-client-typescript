import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PointPlotWidgetDefinitionType } from "./PointPlotWidgetDefinitionType";
import { PointPlotWidgetLegend } from "./PointPlotWidgetLegend";
import { PointPlotWidgetRequest } from "./PointPlotWidgetRequest";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The point plot displays individual data points over time.
 */
export class PointPlotWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * Legend configuration for the point plot widget.
   */
  "legend"?: PointPlotWidgetLegend;
  /**
   * List of markers for the widget.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * List of request configurations for the widget.
   */
  "requests": Array<PointPlotWidgetRequest>;
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
   * Type of the point plot widget.
   */
  "type": PointPlotWidgetDefinitionType;
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
    description: {
      baseName: "description",
      type: "string",
    },
    legend: {
      baseName: "legend",
      type: "PointPlotWidgetLegend",
    },
    markers: {
      baseName: "markers",
      type: "Array<WidgetMarker>",
    },
    requests: {
      baseName: "requests",
      type: "Array<PointPlotWidgetRequest>",
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
      type: "PointPlotWidgetDefinitionType",
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
    return PointPlotWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
