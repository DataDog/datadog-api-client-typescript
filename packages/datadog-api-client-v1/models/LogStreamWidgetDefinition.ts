/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogStreamWidgetDefinitionType } from "./LogStreamWidgetDefinitionType";
import { WidgetFieldSort } from "./WidgetFieldSort";
import { WidgetMessageDisplay } from "./WidgetMessageDisplay";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

export class LogStreamWidgetDefinition {
  /**
   * Which columns to display on the widget.
   */
  "columns"?: Array<string>;
  /**
   * An array of index names to query in the stream. Use [] to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * ID of the log set to use.
   */
  "logset"?: string;
  "messageDisplay"?: WidgetMessageDisplay;
  /**
   * Query to filter the log stream with.
   */
  "query"?: string;
  /**
   * Whether to show the date column or not
   */
  "showDateColumn"?: boolean;
  /**
   * Whether to show the message column or not
   */
  "showMessageColumn"?: boolean;
  "sort"?: WidgetFieldSort;
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
  "type": LogStreamWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    columns: {
      baseName: "columns",
      type: "Array<string>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    logset: {
      baseName: "logset",
      type: "string",
    },
    messageDisplay: {
      baseName: "message_display",
      type: "WidgetMessageDisplay",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    showDateColumn: {
      baseName: "show_date_column",
      type: "boolean",
    },
    showMessageColumn: {
      baseName: "show_message_column",
      type: "boolean",
    },
    sort: {
      baseName: "sort",
      type: "WidgetFieldSort",
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
      type: "LogStreamWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return LogStreamWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
