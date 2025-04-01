/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NoteWidgetDefinitionType } from "./NoteWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTickEdge } from "./WidgetTickEdge";
import { WidgetVerticalAlign } from "./WidgetVerticalAlign";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The notes and links widget is similar to free text widget, but allows for more formatting options.
*/
export class NoteWidgetDefinition {
  /**
   * Background color of the note.
  */
  "backgroundColor"?: string;
  /**
   * Content of the note.
  */
  "content": string;
  /**
   * Size of the text.
  */
  "fontSize"?: string;
  /**
   * Whether to add padding or not.
  */
  "hasPadding"?: boolean;
  /**
   * Whether to show a tick or not.
  */
  "showTick"?: boolean;
  /**
   * How to align the text on the widget.
  */
  "textAlign"?: WidgetTextAlign;
  /**
   * Define how you want to align the text on the widget.
  */
  "tickEdge"?: WidgetTickEdge;
  /**
   * Where to position the tick on an edge.
  */
  "tickPos"?: string;
  /**
   * Type of the note widget.
  */
  "type": NoteWidgetDefinitionType;
  /**
   * Vertical alignment.
  */
  "verticalAlign"?: WidgetVerticalAlign;

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
    "backgroundColor": {
      "baseName": "background_color",
      "type": "string",
    },
    "content": {
      "baseName": "content",
      "type": "string",
      "required": true,
    },
    "fontSize": {
      "baseName": "font_size",
      "type": "string",
    },
    "hasPadding": {
      "baseName": "has_padding",
      "type": "boolean",
    },
    "showTick": {
      "baseName": "show_tick",
      "type": "boolean",
    },
    "textAlign": {
      "baseName": "text_align",
      "type": "WidgetTextAlign",
    },
    "tickEdge": {
      "baseName": "tick_edge",
      "type": "WidgetTickEdge",
    },
    "tickPos": {
      "baseName": "tick_pos",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "NoteWidgetDefinitionType",
      "required": true,
    },
    "verticalAlign": {
      "baseName": "vertical_align",
      "type": "WidgetVerticalAlign",
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




    return NoteWidgetDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









