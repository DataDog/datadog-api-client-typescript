/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ListStreamWidgetDefinitionType } from "./ListStreamWidgetDefinitionType";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The list stream visualization displays a table of recent events in your application that match a search criteria using user-defined columns.
 */

export class ListStreamWidgetDefinition {
  /**
   * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
   */
  "legendSize"?: string;
  /**
   * Request payload used to query items.
   */
  "requests": Array<ListStreamWidgetRequest>;
  /**
   * Whether or not to display the legend on this widget.
   */
  "showLegend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": ListStreamWidgetDefinitionType;

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
    requests: {
      baseName: "requests",
      type: "Array<ListStreamWidgetRequest>",
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
      type: "ListStreamWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListStreamWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
