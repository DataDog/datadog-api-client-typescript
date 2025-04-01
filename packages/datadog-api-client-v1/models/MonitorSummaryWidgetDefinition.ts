/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSummaryWidgetDefinitionType } from "./MonitorSummaryWidgetDefinitionType";
import { WidgetColorPreference } from "./WidgetColorPreference";
import { WidgetMonitorSummaryDisplayFormat } from "./WidgetMonitorSummaryDisplayFormat";
import { WidgetMonitorSummarySort } from "./WidgetMonitorSummarySort";
import { WidgetSummaryType } from "./WidgetSummaryType";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The monitor summary widget displays a summary view of all your Datadog monitors, or a subset based on a query. Only available on FREE layout dashboards.
*/
export class MonitorSummaryWidgetDefinition {
  /**
   * Which color to use on the widget.
  */
  "colorPreference"?: WidgetColorPreference;
  /**
   * The number of monitors to display.
  */
  "count"?: number;
  /**
   * What to display on the widget.
  */
  "displayFormat"?: WidgetMonitorSummaryDisplayFormat;
  /**
   * Whether to show counts of 0 or not.
  */
  "hideZeroCounts"?: boolean;
  /**
   * Query to filter the monitors with.
  */
  "query": string;
  /**
   * Whether to show the time that has elapsed since the monitor/group triggered.
  */
  "showLastTriggered"?: boolean;
  /**
   * Whether to show the priorities column.
  */
  "showPriority"?: boolean;
  /**
   * Widget sorting methods.
  */
  "sort"?: WidgetMonitorSummarySort;
  /**
   * The start of the list. Typically 0.
  */
  "start"?: number;
  /**
   * Which summary type should be used.
  */
  "summaryType"?: WidgetSummaryType;
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
   * Type of the monitor summary widget.
  */
  "type": MonitorSummaryWidgetDefinitionType;

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
    "colorPreference": {
      "baseName": "color_preference",
      "type": "WidgetColorPreference",
    },
    "count": {
      "baseName": "count",
      "type": "number",
      "format": "int64",
    },
    "displayFormat": {
      "baseName": "display_format",
      "type": "WidgetMonitorSummaryDisplayFormat",
    },
    "hideZeroCounts": {
      "baseName": "hide_zero_counts",
      "type": "boolean",
    },
    "query": {
      "baseName": "query",
      "type": "string",
      "required": true,
    },
    "showLastTriggered": {
      "baseName": "show_last_triggered",
      "type": "boolean",
    },
    "showPriority": {
      "baseName": "show_priority",
      "type": "boolean",
    },
    "sort": {
      "baseName": "sort",
      "type": "WidgetMonitorSummarySort",
    },
    "start": {
      "baseName": "start",
      "type": "number",
      "format": "int64",
    },
    "summaryType": {
      "baseName": "summary_type",
      "type": "WidgetSummaryType",
    },
    "title": {
      "baseName": "title",
      "type": "string",
    },
    "titleAlign": {
      "baseName": "title_align",
      "type": "WidgetTextAlign",
    },
    "titleSize": {
      "baseName": "title_size",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "MonitorSummaryWidgetDefinitionType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return MonitorSummaryWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









