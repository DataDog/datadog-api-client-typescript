/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckStatusWidgetDefinitionType } from "./CheckStatusWidgetDefinitionType";
import { WidgetGrouping } from "./WidgetGrouping";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Check status shows the current status or number of results for any check performed.
 */

export class CheckStatusWidgetDefinition {
  /**
   * Name of the check to use in the widget.
   */
  "check": string;
  /**
   * Group reporting a single check.
   */
  "group"?: string;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "groupBy"?: Array<string>;
  "grouping": WidgetGrouping;
  /**
   * List of tags used to filter the groups reporting a cluster check.
   */
  "tags"?: Array<string>;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": CheckStatusWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    check: {
      baseName: "check",
      type: "string",
      format: "",
    },
    group: {
      baseName: "group",
      type: "string",
      format: "",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
      format: "",
    },
    grouping: {
      baseName: "grouping",
      type: "WidgetGrouping",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "CheckStatusWidgetDefinitionType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return CheckStatusWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): CheckStatusWidgetDefinition {
    const res = new CheckStatusWidgetDefinition();

    if (data.check === undefined) {
      throw new TypeError(
        "missing required attribute 'check' on 'CheckStatusWidgetDefinition' object"
      );
    }
    res.check = ObjectSerializer.deserialize(data.check, "string", "");

    res.group = ObjectSerializer.deserialize(data.group, "string", "");

    res.groupBy = ObjectSerializer.deserialize(
      data.group_by,
      "Array<string>",
      ""
    );

    if (data.grouping === undefined) {
      throw new TypeError(
        "missing required attribute 'grouping' on 'CheckStatusWidgetDefinition' object"
      );
    }
    if (["check", "cluster", undefined].includes(data.grouping)) {
      res.grouping = data.grouping;
    } else {
      const raw = new CheckStatusWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    res.time = ObjectSerializer.deserialize(data.time, "WidgetTime", "");

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      const raw = new CheckStatusWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'CheckStatusWidgetDefinition' object"
      );
    }
    if (["check_status", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new CheckStatusWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: CheckStatusWidgetDefinition): { [key: string]: any } {
    const attributeTypes = CheckStatusWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.check === undefined) {
      throw new TypeError(
        "missing required attribute 'check' on 'CheckStatusWidgetDefinition' object"
      );
    }
    res.check = ObjectSerializer.serialize(data.check, "string", "");

    res.group = ObjectSerializer.serialize(data.group, "string", "");

    res.group_by = ObjectSerializer.serialize(
      data.groupBy,
      "Array<string>",
      ""
    );

    if (data.grouping === undefined) {
      throw new TypeError(
        "missing required attribute 'grouping' on 'CheckStatusWidgetDefinition' object"
      );
    }
    if (["check", "cluster", undefined].includes(data.grouping)) {
      res.grouping = data.grouping;
    } else {
      throw TypeError(`invalid enum value ${data.grouping} for grouping`);
    }

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    res.time = ObjectSerializer.serialize(data.time, "WidgetTime", "");

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'CheckStatusWidgetDefinition' object"
      );
    }
    if (["check_status", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
