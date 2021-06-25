/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOWidgetDefinitionType } from "./SLOWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTimeWindows } from "./WidgetTimeWindows";
import { WidgetViewMode } from "./WidgetViewMode";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Use the SLO and uptime widget to track your SLOs (Service Level Objectives) and uptime on screenboards and timeboards.
 */

export class SLOWidgetDefinition {
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
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": SLOWidgetDefinitionType;
  "viewMode"?: WidgetViewMode;
  /**
   * Type of view displayed by the widget.
   */
  "viewType": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    globalTimeTarget: {
      baseName: "global_time_target",
      type: "string",
      format: "",
    },
    showErrorBudget: {
      baseName: "show_error_budget",
      type: "boolean",
      format: "",
    },
    sloId: {
      baseName: "slo_id",
      type: "string",
      format: "",
    },
    timeWindows: {
      baseName: "time_windows",
      type: "Array<WidgetTimeWindows>",
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
      type: "SLOWidgetDefinitionType",
      format: "",
    },
    viewMode: {
      baseName: "view_mode",
      type: "WidgetViewMode",
      format: "",
    },
    viewType: {
      baseName: "view_type",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOWidgetDefinition {
    const res = new SLOWidgetDefinition();

    res.globalTimeTarget = ObjectSerializer.deserialize(
      data.global_time_target,
      "string",
      ""
    );

    res.showErrorBudget = ObjectSerializer.deserialize(
      data.show_error_budget,
      "boolean",
      ""
    );

    res.sloId = ObjectSerializer.deserialize(data.slo_id, "string", "");

    res.timeWindows = ObjectSerializer.deserialize(
      data.time_windows,
      "Array<WidgetTimeWindows>",
      ""
    );

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      throw TypeError(`invalid enum value ${data.title_align} for title_align`);
    }

    res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SLOWidgetDefinition' object"
      );
    }
    if (["slo", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    if (["overall", "component", "both", undefined].includes(data.view_mode)) {
      res.viewMode = data.view_mode;
    } else {
      throw TypeError(`invalid enum value ${data.view_mode} for view_mode`);
    }

    if (data.view_type === undefined) {
      throw new TypeError(
        "missing required attribute 'view_type' on 'SLOWidgetDefinition' object"
      );
    }
    res.viewType = ObjectSerializer.deserialize(data.view_type, "string", "");

    return res;
  }

  static serialize(data: SLOWidgetDefinition): { [key: string]: any } {
    const attributeTypes = SLOWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.global_time_target = ObjectSerializer.serialize(
      data.globalTimeTarget,
      "string",
      ""
    );

    res.show_error_budget = ObjectSerializer.serialize(
      data.showErrorBudget,
      "boolean",
      ""
    );

    res.slo_id = ObjectSerializer.serialize(data.sloId, "string", "");

    res.time_windows = ObjectSerializer.serialize(
      data.timeWindows,
      "Array<WidgetTimeWindows>",
      ""
    );

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SLOWidgetDefinition' object"
      );
    }
    if (["slo", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    if (["overall", "component", "both", undefined].includes(data.viewMode)) {
      res.view_mode = data.viewMode;
    } else {
      throw TypeError(`invalid enum value ${data.viewMode} for viewMode`);
    }

    if (data.viewType === undefined) {
      throw new TypeError(
        "missing required attribute 'view_type' on 'SLOWidgetDefinition' object"
      );
    }
    res.view_type = ObjectSerializer.serialize(data.viewType, "string", "");

    return res;
  }

  public constructor() {}
}
