/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertValueWidgetDefinitionType } from "./AlertValueWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { ObjectSerializer } from "./ObjectSerializer";

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
  "textAlign"?: WidgetTextAlign;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of value in the widget.
   */
  "titleSize"?: string;
  "type": AlertValueWidgetDefinitionType;
  /**
   * Unit to display with the value.
   */
  "unit"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    alertId: {
      baseName: "alert_id",
      type: "string",
      format: "",
    },
    precision: {
      baseName: "precision",
      type: "number",
      format: "int64",
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
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
      type: "AlertValueWidgetDefinitionType",
      format: "",
    },
    unit: {
      baseName: "unit",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AlertValueWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AlertValueWidgetDefinition {
    const res = new AlertValueWidgetDefinition();

    if (data.alert_id === undefined) {
      throw new TypeError(
        "missing required attribute 'alert_id' on 'AlertValueWidgetDefinition' object"
      );
    }
    res.alertId = ObjectSerializer.deserialize(data.alert_id, "string", "");

    res.precision = ObjectSerializer.deserialize(
      data.precision,
      "number",
      "int64"
    );

    if (["center", "left", "right", undefined].includes(data.text_align)) {
      res.textAlign = data.text_align;
    } else {
      const raw = new AlertValueWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      const raw = new AlertValueWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'AlertValueWidgetDefinition' object"
      );
    }
    if (["alert_value", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new AlertValueWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.unit = ObjectSerializer.deserialize(data.unit, "string", "");

    return res;
  }

  static serialize(data: AlertValueWidgetDefinition): { [key: string]: any } {
    const attributeTypes = AlertValueWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.alertId === undefined) {
      throw new TypeError(
        "missing required attribute 'alert_id' on 'AlertValueWidgetDefinition' object"
      );
    }
    res.alert_id = ObjectSerializer.serialize(data.alertId, "string", "");

    res.precision = ObjectSerializer.serialize(
      data.precision,
      "number",
      "int64"
    );

    if (["center", "left", "right", undefined].includes(data.textAlign)) {
      res.text_align = data.textAlign;
    } else {
      throw TypeError(`invalid enum value ${data.textAlign} for textAlign`);
    }

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'AlertValueWidgetDefinition' object"
      );
    }
    if (["alert_value", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    res.unit = ObjectSerializer.serialize(data.unit, "string", "");

    return res;
  }

  public constructor() {}
}
