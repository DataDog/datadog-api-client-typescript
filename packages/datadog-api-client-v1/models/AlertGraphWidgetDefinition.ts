/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertGraphWidgetDefinitionType } from "./AlertGraphWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { WidgetVizType } from "./WidgetVizType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Alert graphs are timeseries graphs showing the current status of any monitor defined on your system.
 */
export class AlertGraphWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alertId": string;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * The title of the widget.
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
   * Type of the alert graph widget.
   */
  "type": AlertGraphWidgetDefinitionType;
  /**
   * Whether to display the Alert Graph as a timeseries or a top list.
   */
  "vizType": WidgetVizType;

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
    alertId: {
      baseName: "alert_id",
      type: "string",
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
      type: "AlertGraphWidgetDefinitionType",
      required: true,
    },
    vizType: {
      baseName: "viz_type",
      type: "WidgetVizType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AlertGraphWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
