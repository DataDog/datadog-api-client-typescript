/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertValueWidgetDefinitionType } from "./AlertValueWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Alert values are query values showing the current value of the metric in any monitor defined on your system.
*/
export class AlertValueWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
  */
  "alertId": string;
  /**
   * Number of decimal to show. If not defined, will use the raw value.
  */
  "precision"?: number;
  /**
   * How to align the text on the widget.
  */
  "textAlign"?: WidgetTextAlign;
  /**
   * Title of the widget.
  */
  "title"?: string;
  /**
   * How to align the text on the widget.
  */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of value in the widget.
  */
  "titleSize"?: string;
  /**
   * Type of the alert value widget.
  */
  "type": AlertValueWidgetDefinitionType;
  /**
   * Unit to display with the value.
  */
  "unit"?: string;

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
    "alertId": {
      "baseName": "alert_id",
      "type": "string",
      "required": true,
    },
    "precision": {
      "baseName": "precision",
      "type": "number",
      "format": "int64",
    },
    "textAlign": {
      "baseName": "text_align",
      "type": "WidgetTextAlign",
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
      "type": "AlertValueWidgetDefinitionType",
      "required": true,
    },
    "unit": {
      "baseName": "unit",
      "type": "string",
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




    return AlertValueWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









