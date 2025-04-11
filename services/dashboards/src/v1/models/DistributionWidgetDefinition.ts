import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DistributionWidgetDefinitionType } from "./DistributionWidgetDefinitionType";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The Distribution visualization is another way of showing metrics
 * aggregated across one or several tags, such as hosts.
 * Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
 */
export class DistributionWidgetDefinition {
  /**
   * A list of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "legendSize"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Array of one request object to display in the widget.
   *
   * See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)
   *  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": [DistributionWidgetRequest];
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
      type: "[DistributionWidgetRequest]",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
