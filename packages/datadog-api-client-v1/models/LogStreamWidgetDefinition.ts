/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogStreamWidgetDefinitionType } from "./LogStreamWidgetDefinitionType";
import { WidgetFieldSort } from "./WidgetFieldSort";
import { WidgetMessageDisplay } from "./WidgetMessageDisplay";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Log Stream displays a log flow matching the defined query. Only available on FREE layout dashboards.
 */
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
  /**
   * Amount of log lines to display
   */
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
  /**
   * Which column and order to sort by
   */
  "sort"?: WidgetFieldSort;
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
   * Type of the log stream widget.
   */
  "type": LogStreamWidgetDefinitionType;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogStreamWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
