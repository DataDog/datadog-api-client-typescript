/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOWidgetDefinitionType } from "./SLOWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTimeWindows } from "./WidgetTimeWindows";
import { WidgetViewMode } from "./WidgetViewMode";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Use the SLO and uptime widget to track your SLOs (Service Level Objectives) and uptime on screenboards and timeboards.
*/
export class SLOWidgetDefinition {
  /**
   * Additional filters applied to the SLO query.
  */
  "additionalQueryFilters"?: string;
  /**
   * Defined global time target.
  */
  "globalTimeTarget"?: string;
  /**
   * Defined error budget.
  */
  "showErrorBudget"?: boolean;
  /**
   * ID of the SLO displayed.
  */
  "sloId"?: string;
  /**
   * Times being monitored.
  */
  "timeWindows"?: Array<WidgetTimeWindows>;
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
   * Type of the SLO widget.
  */
  "type": SLOWidgetDefinitionType;
  /**
   * Define how you want the SLO to be displayed.
  */
  "viewMode"?: WidgetViewMode;
  /**
   * Type of view displayed by the widget.
  */
  "viewType": string;

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
    "additionalQueryFilters": {
      "baseName": "additional_query_filters",
      "type": "string",
    },
    "globalTimeTarget": {
      "baseName": "global_time_target",
      "type": "string",
    },
    "showErrorBudget": {
      "baseName": "show_error_budget",
      "type": "boolean",
    },
    "sloId": {
      "baseName": "slo_id",
      "type": "string",
    },
    "timeWindows": {
      "baseName": "time_windows",
      "type": "Array<WidgetTimeWindows>",
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
      "type": "SLOWidgetDefinitionType",
      "required": true,
    },
    "viewMode": {
      "baseName": "view_mode",
      "type": "WidgetViewMode",
    },
    "viewType": {
      "baseName": "view_type",
      "type": "string",
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




    return SLOWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









