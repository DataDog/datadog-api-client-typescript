/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardShareType } from "./DashboardShareType";
import { SelectableTemplateVariableItems } from "./SelectableTemplateVariableItems";
import { SharedDashboardInviteesItems } from "./SharedDashboardInviteesItems";
import { SharedDashboardStatus } from "./SharedDashboardStatus";
import { SharedDashboardUpdateRequestGlobalTime } from "./SharedDashboardUpdateRequestGlobalTime";
import { ViewingPreferences } from "./ViewingPreferences";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update a shared dashboard's settings.
 */
export class SharedDashboardUpdateRequest {
  /**
   * The `SharedDashboard` `embeddable_domains`.
   */
  "embeddableDomains"?: Array<string>;
  /**
   * The time when an OPEN shared dashboard becomes publicly unavailable.
   */
  "expiration"?: Date;
  /**
   * Timeframe setting for the shared dashboard.
   */
  "globalTime"?: SharedDashboardUpdateRequestGlobalTime;
  /**
   * Whether to allow viewers to select a different global time setting for the shared dashboard.
   */
  "globalTimeSelectableEnabled"?: boolean;
  /**
   * The `SharedDashboard` `invitees`.
   */
  "invitees"?: Array<SharedDashboardInviteesItems>;
  /**
   * List of objects representing template variables on the shared dashboard which can have selectable values.
   */
  "selectableTemplateVars"?: Array<SelectableTemplateVariableItems>;
  /**
   * List of email addresses that can be given access to the shared dashboard.
   */
  "shareList"?: Array<string>;
  /**
   * Type of sharing access (either open to anyone who has the public URL or invite-only).
   */
  "shareType"?: DashboardShareType;
  /**
   * Active means the dashboard is publicly available. Paused means the dashboard is not publicly available.
   */
  "status"?: SharedDashboardStatus;
  /**
   * Title of the shared dashboard.
   */
  "title"?: string;
  /**
   * The viewing preferences for a shared dashboard.
   */
  "viewingPreferences"?: ViewingPreferences;

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
    embeddableDomains: {
      baseName: "embeddable_domains",
      type: "Array<string>",
    },
    expiration: {
      baseName: "expiration",
      type: "Date",
      format: "date-time",
    },
    globalTime: {
      baseName: "global_time",
      type: "SharedDashboardUpdateRequestGlobalTime",
    },
    globalTimeSelectableEnabled: {
      baseName: "global_time_selectable_enabled",
      type: "boolean",
    },
    invitees: {
      baseName: "invitees",
      type: "Array<SharedDashboardInviteesItems>",
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
    status: {
      baseName: "status",
      type: "SharedDashboardStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    viewingPreferences: {
      baseName: "viewing_preferences",
      type: "ViewingPreferences",
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
    return SharedDashboardUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
