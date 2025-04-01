/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventTimelineWidgetDefinitionType } from "./EventTimelineWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The event timeline is a widget version of the timeline that appears at the top of the Event Stream view. Only available on FREE layout dashboards.
*/
export class EventTimelineWidgetDefinition {
  /**
   * Query to filter the event timeline with.
  */
  "query": string;
  /**
   * The execution method for multi-value filters. Can be either and or or.
  */
  "tagsExecution"?: string;
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
   * Type of the event timeline widget.
  */
  "type": EventTimelineWidgetDefinitionType;

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
    "query": {
      "baseName": "query",
      "type": "string",
      "required": true,
    },
    "tagsExecution": {
      "baseName": "tags_execution",
      "type": "string",
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
      "type": "EventTimelineWidgetDefinitionType",
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




    return EventTimelineWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









