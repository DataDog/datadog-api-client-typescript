/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NoteWidgetDefinitionType } from "./NoteWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTickEdge } from "./WidgetTickEdge";
import { WidgetVerticalAlign } from "./WidgetVerticalAlign";
import { ObjectSerializer } from "./ObjectSerializer";

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
  "textAlign"?: WidgetTextAlign;
  "tickEdge"?: WidgetTickEdge;
  /**
   * Where to position the tick on an edge.
   */
  "tickPos"?: string;
  "type": NoteWidgetDefinitionType;
  "verticalAlign"?: WidgetVerticalAlign;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    backgroundColor: {
      baseName: "background_color",
      type: "string",
      format: "",
    },
    content: {
      baseName: "content",
      type: "string",
      format: "",
    },
    fontSize: {
      baseName: "font_size",
      type: "string",
      format: "",
    },
    hasPadding: {
      baseName: "has_padding",
      type: "boolean",
      format: "",
    },
    showTick: {
      baseName: "show_tick",
      type: "boolean",
      format: "",
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
      format: "",
    },
    tickEdge: {
      baseName: "tick_edge",
      type: "WidgetTickEdge",
      format: "",
    },
    tickPos: {
      baseName: "tick_pos",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "NoteWidgetDefinitionType",
      format: "",
    },
    verticalAlign: {
      baseName: "vertical_align",
      type: "WidgetVerticalAlign",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NoteWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NoteWidgetDefinition {
    const res = new NoteWidgetDefinition();

    res.backgroundColor = ObjectSerializer.deserialize(
      data.background_color,
      "string",
      ""
    );

    if (data.content === undefined) {
      throw new TypeError(
        "missing required attribute 'content' on 'NoteWidgetDefinition' object"
      );
    }
    res.content = ObjectSerializer.deserialize(data.content, "string", "");

    res.fontSize = ObjectSerializer.deserialize(data.font_size, "string", "");

    res.hasPadding = ObjectSerializer.deserialize(
      data.has_padding,
      "boolean",
      ""
    );

    res.showTick = ObjectSerializer.deserialize(data.show_tick, "boolean", "");

    if (["center", "left", "right", undefined].includes(data.text_align)) {
      res.textAlign = data.text_align;
    } else {
      throw TypeError(`invalid enum value ${data.text_align} for text_align`);
    }

    if (
      ["bottom", "left", "right", "top", undefined].includes(data.tick_edge)
    ) {
      res.tickEdge = data.tick_edge;
    } else {
      throw TypeError(`invalid enum value ${data.tick_edge} for tick_edge`);
    }

    res.tickPos = ObjectSerializer.deserialize(data.tick_pos, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NoteWidgetDefinition' object"
      );
    }
    if (["note", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    if (["center", "top", "bottom", undefined].includes(data.vertical_align)) {
      res.verticalAlign = data.vertical_align;
    } else {
      throw TypeError(
        `invalid enum value ${data.vertical_align} for vertical_align`
      );
    }

    return res;
  }

  static serialize(data: NoteWidgetDefinition): { [key: string]: any } {
    const attributeTypes = NoteWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.background_color = ObjectSerializer.serialize(
      data.backgroundColor,
      "string",
      ""
    );

    if (data.content === undefined) {
      throw new TypeError(
        "missing required attribute 'content' on 'NoteWidgetDefinition' object"
      );
    }
    res.content = ObjectSerializer.serialize(data.content, "string", "");

    res.font_size = ObjectSerializer.serialize(data.fontSize, "string", "");

    res.has_padding = ObjectSerializer.serialize(
      data.hasPadding,
      "boolean",
      ""
    );

    res.show_tick = ObjectSerializer.serialize(data.showTick, "boolean", "");

    if (["center", "left", "right", undefined].includes(data.textAlign)) {
      res.text_align = data.textAlign;
    } else {
      throw TypeError(`invalid enum value ${data.textAlign} for textAlign`);
    }

    if (["bottom", "left", "right", "top", undefined].includes(data.tickEdge)) {
      res.tick_edge = data.tickEdge;
    } else {
      throw TypeError(`invalid enum value ${data.tickEdge} for tickEdge`);
    }

    res.tick_pos = ObjectSerializer.serialize(data.tickPos, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NoteWidgetDefinition' object"
      );
    }
    if (["note", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    if (["center", "top", "bottom", undefined].includes(data.verticalAlign)) {
      res.vertical_align = data.verticalAlign;
    } else {
      throw TypeError(
        `invalid enum value ${data.verticalAlign} for verticalAlign`
      );
    }

    return res;
  }

  public constructor() {}
}
