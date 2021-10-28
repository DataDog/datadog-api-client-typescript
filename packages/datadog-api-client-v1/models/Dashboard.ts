/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardLayoutType } from "./DashboardLayoutType";
import { DashboardReflowType } from "./DashboardReflowType";
import { DashboardTemplateVariable } from "./DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "./DashboardTemplateVariablePreset";
import { Widget } from "./Widget";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A dashboard is Datadog’s tool for visually tracking, analyzing, and displaying key performance metrics, which enable you to monitor the health of your infrastructure.
 */

export class Dashboard {
  /**
   * Identifier of the dashboard author.
   */
  "authorHandle"?: string;
  /**
   * Creation date of the dashboard.
   */
  "createdAt"?: Date;
  /**
   * Description of the dashboard.
   */
  "description"?: string;
  /**
   * ID of the dashboard.
   */
  "id"?: string;
  /**
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it. Prefer using `restricted_roles` to manage write authorization.
   */
  "isReadOnly"?: boolean;
  "layoutType": DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modifiedAt"?: Date;
  /**
   * List of handles of users to notify when changes are made to this dashboard.
   */
  "notifyList"?: Array<string>;
  "reflowType"?: DashboardReflowType;
  /**
   * A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.
   */
  "restrictedRoles"?: Array<string>;
  /**
   * Array of template variables saved views.
   */
  "templateVariablePresets"?: Array<DashboardTemplateVariablePreset>;
  /**
   * List of template variables for this dashboard.
   */
  "templateVariables"?: Array<DashboardTemplateVariable>;
  /**
   * Title of the dashboard.
   */
  "title": string;
  /**
   * The URL of the dashboard.
   */
  "url"?: string;
  /**
   * List of widgets to display on the dashboard.
   */
  "widgets": Array<Widget>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    authorHandle: {
      baseName: "author_handle",
      type: "string",
      format: "",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
      format: "",
    },
    layoutType: {
      baseName: "layout_type",
      type: "DashboardLayoutType",
      format: "",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    notifyList: {
      baseName: "notify_list",
      type: "Array<string>",
      format: "",
    },
    reflowType: {
      baseName: "reflow_type",
      type: "DashboardReflowType",
      format: "",
    },
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
      format: "",
    },
    templateVariablePresets: {
      baseName: "template_variable_presets",
      type: "Array<DashboardTemplateVariablePreset>",
      format: "",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<DashboardTemplateVariable>",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    url: {
      baseName: "url",
      type: "string",
      format: "",
    },
    widgets: {
      baseName: "widgets",
      type: "Array<Widget>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Dashboard.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): Dashboard {
    const res = new Dashboard();

    res.authorHandle = ObjectSerializer.deserialize(
      data.author_handle,
      "string",
      ""
    );

    res.createdAt = ObjectSerializer.deserialize(
      data.created_at,
      "Date",
      "date-time"
    );

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.isReadOnly = ObjectSerializer.deserialize(
      data.is_read_only,
      "boolean",
      ""
    );

    if (data.layout_type === undefined) {
      throw new TypeError(
        "missing required attribute 'layout_type' on 'Dashboard' object"
      );
    }
    if (["ordered", "free", undefined].includes(data.layout_type)) {
      res.layoutType = data.layout_type;
    } else {
      const raw = new Dashboard();
      raw.unparsedObject = data;
      return raw;
    }

    res.modifiedAt = ObjectSerializer.deserialize(
      data.modified_at,
      "Date",
      "date-time"
    );

    res.notifyList = ObjectSerializer.deserialize(
      data.notify_list,
      "Array<string>",
      ""
    );

    if (["auto", "fixed", undefined].includes(data.reflow_type)) {
      res.reflowType = data.reflow_type;
    } else {
      const raw = new Dashboard();
      raw.unparsedObject = data;
      return raw;
    }

    res.restrictedRoles = ObjectSerializer.deserialize(
      data.restricted_roles,
      "Array<string>",
      ""
    );

    res.templateVariablePresets = ObjectSerializer.deserialize(
      data.template_variable_presets,
      "Array<DashboardTemplateVariablePreset>",
      ""
    );

    res.templateVariables = ObjectSerializer.deserialize(
      data.template_variables,
      "Array<DashboardTemplateVariable>",
      ""
    );

    if (data.title === undefined) {
      throw new TypeError(
        "missing required attribute 'title' on 'Dashboard' object"
      );
    }
    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    res.url = ObjectSerializer.deserialize(data.url, "string", "");

    if (data.widgets === undefined) {
      throw new TypeError(
        "missing required attribute 'widgets' on 'Dashboard' object"
      );
    }
    res.widgets = ObjectSerializer.deserialize(
      data.widgets,
      "Array<Widget>",
      ""
    );

    return res;
  }

  static serialize(data: Dashboard): { [key: string]: any } {
    const attributeTypes = Dashboard.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.author_handle = ObjectSerializer.serialize(
      data.authorHandle,
      "string",
      ""
    );

    res.created_at = ObjectSerializer.serialize(
      data.createdAt,
      "Date",
      "date-time"
    );

    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.is_read_only = ObjectSerializer.serialize(
      data.isReadOnly,
      "boolean",
      ""
    );

    if (data.layoutType === undefined) {
      throw new TypeError(
        "missing required attribute 'layout_type' on 'Dashboard' object"
      );
    }
    if (["ordered", "free", undefined].includes(data.layoutType)) {
      res.layout_type = data.layoutType;
    } else {
      throw TypeError(`invalid enum value ${data.layoutType} for layoutType`);
    }

    res.modified_at = ObjectSerializer.serialize(
      data.modifiedAt,
      "Date",
      "date-time"
    );

    res.notify_list = ObjectSerializer.serialize(
      data.notifyList,
      "Array<string>",
      ""
    );

    if (["auto", "fixed", undefined].includes(data.reflowType)) {
      res.reflow_type = data.reflowType;
    } else {
      throw TypeError(`invalid enum value ${data.reflowType} for reflowType`);
    }

    res.restricted_roles = ObjectSerializer.serialize(
      data.restrictedRoles,
      "Array<string>",
      ""
    );

    res.template_variable_presets = ObjectSerializer.serialize(
      data.templateVariablePresets,
      "Array<DashboardTemplateVariablePreset>",
      ""
    );

    res.template_variables = ObjectSerializer.serialize(
      data.templateVariables,
      "Array<DashboardTemplateVariable>",
      ""
    );

    if (data.title === undefined) {
      throw new TypeError(
        "missing required attribute 'title' on 'Dashboard' object"
      );
    }
    res.title = ObjectSerializer.serialize(data.title, "string", "");

    res.url = ObjectSerializer.serialize(data.url, "string", "");

    if (data.widgets === undefined) {
      throw new TypeError(
        "missing required attribute 'widgets' on 'Dashboard' object"
      );
    }
    res.widgets = ObjectSerializer.serialize(data.widgets, "Array<Widget>", "");

    return res;
  }

  public constructor() {}
}
