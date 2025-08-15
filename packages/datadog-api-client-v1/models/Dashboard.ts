/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardLayoutType } from "./DashboardLayoutType";
import { DashboardReflowType } from "./DashboardReflowType";
import { DashboardTemplateVariable } from "./DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "./DashboardTemplateVariablePreset";
import { Widget } from "./Widget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A dashboard is Datadog’s tool for visually tracking, analyzing, and displaying
 * key performance metrics, which enable you to monitor the health of your infrastructure.
 */
export class Dashboard {
  /**
   * Identifier of the dashboard author.
   */
  "authorHandle"?: string;
  /**
   * Name of the dashboard author.
   */
  "authorName"?: string;
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
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
   *
   * This property is deprecated; please use the [Restriction Policies API](https://docs.datadoghq.com/api/latest/restriction-policies/) instead to manage write authorization for individual dashboards.
   */
  "isReadOnly"?: boolean;
  /**
   * Layout type of the dashboard.
   */
  "layoutType": DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modifiedAt"?: Date;
  /**
   * List of handles of users to notify when changes are made to this dashboard.
   */
  "notifyList"?: Array<string>;
  /**
   * Reflow type for a **new dashboard layout** dashboard. Set this only when layout type is 'ordered'.
   * If set to 'fixed', the dashboard expects all widgets to have a layout, and if it's set to 'auto',
   * widgets should not have layouts.
   */
  "reflowType"?: DashboardReflowType;
  /**
   * A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.
   */
  "restrictedRoles"?: Array<string>;
  /**
   * List of team names representing ownership of a dashboard.
   */
  "tags"?: Array<string>;
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
    authorHandle: {
      baseName: "author_handle",
      type: "string",
    },
    authorName: {
      baseName: "author_name",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    layoutType: {
      baseName: "layout_type",
      type: "DashboardLayoutType",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    notifyList: {
      baseName: "notify_list",
      type: "Array<string>",
    },
    reflowType: {
      baseName: "reflow_type",
      type: "DashboardReflowType",
    },
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    templateVariablePresets: {
      baseName: "template_variable_presets",
      type: "Array<DashboardTemplateVariablePreset>",
    },
    templateVariables: {
      baseName: "template_variables",
      type: "Array<DashboardTemplateVariable>",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
    },
    widgets: {
      baseName: "widgets",
      type: "Array<Widget>",
      required: true,
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
    return Dashboard.attributeTypeMap;
  }

  public constructor() {}
}
