/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardInvitee } from "./SharedDashboardInvitee";
import { SharedDashboardSelectableTemplateVariable } from "./SharedDashboardSelectableTemplateVariable";
import { SharedDashboardShareType } from "./SharedDashboardShareType";
import { SharedDashboardStatus } from "./SharedDashboardStatus";
import { SharedDashboardViewingPreferences } from "./SharedDashboardViewingPreferences";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a shared dashboard response.
 */
export class SharedDashboardResponseAttributes {
  /**
   * Time when the shared dashboard was created.
   */
  "createdAt": Date;
  /**
   * Domains where embed-type shared dashboards can be embedded.
   */
  "embeddableDomains": Array<string>;
  /**
   * Time when the shared dashboard expires.
   */
  "expiration": Date | null;
  /**
   * Default time range configuration for the shared dashboard.
   */
  "globalTime": { [key: string]: any } | null;
  /**
   * Whether viewers can select a different global time setting.
   */
  "globalTimeSelectable": boolean;
  /**
   * Invitees for invite-only shared dashboards.
   */
  "invitees": Array<SharedDashboardInvitee>;
  /**
   * Time when the shared dashboard was last accessed.
   */
  "lastAccessed": Date | null;
  /**
   * Template variables that viewers can modify.
   */
  "selectableTemplateVars": Array<SharedDashboardSelectableTemplateVariable>;
  /**
   * Type of dashboard sharing.
   */
  "shareType": SharedDashboardShareType;
  /**
   * Whether the user who shared the dashboard is disabled.
   */
  "sharerDisabled": boolean;
  /**
   * Status of the shared dashboard.
   */
  "status": SharedDashboardStatus;
  /**
   * Display title for the shared dashboard.
   */
  "title": string;
  /**
   * Token assigned to the shared dashboard.
   */
  "token": string;
  /**
   * URL for the shared dashboard.
   */
  "url": string;
  /**
   * Display settings for the shared dashboard.
   */
  "viewingPreferences": SharedDashboardViewingPreferences;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    embeddableDomains: {
      baseName: "embeddable_domains",
      type: "Array<string>",
      required: true,
    },
    expiration: {
      baseName: "expiration",
      type: "Date",
      required: true,
      format: "date-time",
    },
    globalTime: {
      baseName: "global_time",
      type: "{ [key: string]: any; }",
      required: true,
    },
    globalTimeSelectable: {
      baseName: "global_time_selectable",
      type: "boolean",
      required: true,
    },
    invitees: {
      baseName: "invitees",
      type: "Array<SharedDashboardInvitee>",
      required: true,
    },
    lastAccessed: {
      baseName: "last_accessed",
      type: "Date",
      required: true,
      format: "date-time",
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SharedDashboardSelectableTemplateVariable>",
      required: true,
    },
    shareType: {
      baseName: "share_type",
      type: "SharedDashboardShareType",
      required: true,
    },
    sharerDisabled: {
      baseName: "sharer_disabled",
      type: "boolean",
      required: true,
    },
    status: {
      baseName: "status",
      type: "SharedDashboardStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
    viewingPreferences: {
      baseName: "viewing_preferences",
      type: "SharedDashboardViewingPreferences",
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
    return SharedDashboardResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
