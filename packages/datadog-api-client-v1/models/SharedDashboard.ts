/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardGlobalTime } from "./DashboardGlobalTime";
import { DashboardShareType } from "./DashboardShareType";
import { DashboardType } from "./DashboardType";
import { SelectableTemplateVariableItems } from "./SelectableTemplateVariableItems";
import { SharedDashboardAuthor } from "./SharedDashboardAuthor";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata object associated with how a dashboard has been/will be shared.
 */
export class SharedDashboard {
  /**
   * User who shared the dashboard.
   */
  "author"?: SharedDashboardAuthor;
  /**
   * Date the dashboard was shared.
   */
  "createdAt"?: Date;
  /**
   * ID of the dashboard to share.
   */
  "dashboardId": string;
  /**
   * The type of the associated private dashboard.
   */
  "dashboardType": DashboardType;
  /**
   * Object containing the live span selection for the dashboard.
   */
  "globalTime"?: DashboardGlobalTime;
  /**
   * Whether to allow viewers to select a different global time setting for the shared dashboard.
   */
  "globalTimeSelectableEnabled"?: boolean;
  /**
   * URL of the shared dashboard.
   */
  "publicUrl"?: string;
  /**
   * List of objects representing template variables on the shared dashboard which can have selectable values.
   */
  "selectableTemplateVars"?: Array<SelectableTemplateVariableItems>;
  /**
   * List of email addresses that can receive an invitation to access to the shared dashboard.
   */
  "shareList"?: Array<string>;
  /**
   * Type of sharing access (either open to anyone who has the public URL or invite-only).
   */
  "shareType"?: DashboardShareType;
  /**
   * A unique token assigned to the shared dashboard.
   */
  "token"?: string;

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
    author: {
      baseName: "author",
      type: "SharedDashboardAuthor",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    dashboardId: {
      baseName: "dashboard_id",
      type: "string",
      required: true,
    },
    dashboardType: {
      baseName: "dashboard_type",
      type: "DashboardType",
      required: true,
    },
    globalTime: {
      baseName: "global_time",
      type: "DashboardGlobalTime",
    },
    globalTimeSelectableEnabled: {
      baseName: "global_time_selectable_enabled",
      type: "boolean",
    },
    publicUrl: {
      baseName: "public_url",
      type: "string",
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SelectableTemplateVariableItems>",
    },
    shareList: {
      baseName: "share_list",
      type: "Array<string>",
    },
    shareType: {
      baseName: "share_type",
      type: "DashboardShareType",
    },
    token: {
      baseName: "token",
      type: "string",
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
    return SharedDashboard.attributeTypeMap;
  }

  public constructor() {}
}
