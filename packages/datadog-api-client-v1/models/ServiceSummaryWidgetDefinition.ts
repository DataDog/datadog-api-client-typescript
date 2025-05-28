/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceSummaryWidgetDefinitionType } from "./ServiceSummaryWidgetDefinitionType";
import { WidgetServiceSummaryDisplayFormat } from "./WidgetServiceSummaryDisplayFormat";
import { WidgetSizeFormat } from "./WidgetSizeFormat";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The service summary displays the graphs of a chosen service in your screenboard. Only available on FREE layout dashboards.
*/
export class ServiceSummaryWidgetDefinition {
  /**
   * Number of columns to display.
  */
  "displayFormat"?: WidgetServiceSummaryDisplayFormat;
  /**
   * APM environment.
  */
  "env": string;
  /**
   * APM service.
  */
  "service": string;
  /**
   * Whether to show the latency breakdown or not.
  */
  "showBreakdown"?: boolean;
  /**
   * Whether to show the latency distribution or not.
  */
  "showDistribution"?: boolean;
  /**
   * Whether to show the error metrics or not.
  */
  "showErrors"?: boolean;
  /**
   * Whether to show the hits metrics or not.
  */
  "showHits"?: boolean;
  /**
   * Whether to show the latency metrics or not.
  */
  "showLatency"?: boolean;
  /**
   * Whether to show the resource list or not.
  */
  "showResourceList"?: boolean;
  /**
   * Size of the widget.
  */
  "sizeFormat"?: WidgetSizeFormat;
  /**
   * APM span name.
  */
  "spanName": string;
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
   * Type of the service summary widget.
  */
  "type": ServiceSummaryWidgetDefinitionType;

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
    "displayFormat": {
      "baseName": "display_format",
      "type": "WidgetServiceSummaryDisplayFormat",
    },
    "env": {
      "baseName": "env",
      "type": "string",
      "required": true,
    },
    "service": {
      "baseName": "service",
      "type": "string",
      "required": true,
    },
    "showBreakdown": {
      "baseName": "show_breakdown",
      "type": "boolean",
    },
    "showDistribution": {
      "baseName": "show_distribution",
      "type": "boolean",
    },
    "showErrors": {
      "baseName": "show_errors",
      "type": "boolean",
    },
    "showHits": {
      "baseName": "show_hits",
      "type": "boolean",
    },
    "showLatency": {
      "baseName": "show_latency",
      "type": "boolean",
    },
    "showResourceList": {
      "baseName": "show_resource_list",
      "type": "boolean",
    },
    "sizeFormat": {
      "baseName": "size_format",
      "type": "WidgetSizeFormat",
    },
    "spanName": {
      "baseName": "span_name",
      "type": "string",
      "required": true,
    },
    "time": {
      "baseName": "time",
      "type": "WidgetTime",
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
      "type": "ServiceSummaryWidgetDefinitionType",
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




    return ServiceSummaryWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









