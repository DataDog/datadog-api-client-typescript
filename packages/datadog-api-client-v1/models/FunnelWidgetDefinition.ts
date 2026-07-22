/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelGroupedDisplay } from "./FunnelGroupedDisplay";
import { FunnelWidgetDefinitionType } from "./FunnelWidgetDefinitionType";
import { FunnelWidgetRequest } from "./FunnelWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The funnel visualization displays a funnel of user sessions that maps a sequence of view navigation and user interaction in your application.
*/
export class FunnelWidgetDefinition {
  /**
   * The description of the widget.
  */
  "description"?: string;
  /**
   * Display mode for grouped funnel results.
  */
  "groupedDisplay"?: FunnelGroupedDisplay;
  /**
   * Request payload used to query items.
  */
  "requests": Array<FunnelWidgetRequest>;
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
   * The size of the title.
  */
  "titleSize"?: string;
  /**
   * Type of funnel widget.
  */
  "type": FunnelWidgetDefinitionType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "description": {
      "baseName": "description",
      "type": "string",
    },
    "groupedDisplay": {
      "baseName": "grouped_display",
      "type": "FunnelGroupedDisplay",
    },
    "requests": {
      "baseName": "requests",
      "type": "Array<FunnelWidgetRequest>",
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
      "type": "FunnelWidgetDefinitionType",
      "required": true,
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




    return FunnelWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









