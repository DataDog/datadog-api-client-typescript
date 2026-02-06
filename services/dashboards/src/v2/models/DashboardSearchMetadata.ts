import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardSearchUser } from "./DashboardSearchUser";

/**
 * Metadata about the dashboard.
 */
export class DashboardSearchMetadata {
  /**
   * User information.
   */
  "author": DashboardSearchUser;
  /**
   * Time at which the dashboard was created.
   */
  "createdAt": Date;
  /**
   * Time at which the dashboard was deleted, or null if not deleted.
   */
  "deletedAt": Date | null;
  /**
   * List of domains the dashboard is allowed to be embedded in.
   */
  "embeddableDomains": Array<string> | null;
  /**
   * Dashboard experience type.
   */
  "experienceType": string;
  /**
   * When the public dashboard link will expire.
   */
  "expiration": Date | null;
  /**
   * Whether the dashboard has monitors.
   */
  "hasMonitors": boolean | null;
  /**
   * Whether the dashboard is favorited by the user.
   */
  "isFavorited": boolean;
  /**
   * Whether the public dashboard owner is deactivated.
   */
  "isPublicDashboardOwnerless": boolean;
  /**
   * Whether the dashboard is shared publicly.
   */
  "isShared": boolean;
  /**
   * Last time the dashboard was accessed.
   */
  "lastAccessed": Date | null;
  /**
   * Time at which the dashboard was last updated.
   */
  "modifiedAt": Date;
  /**
   * Relative measure of dashboard popularity.
   */
  "popularity": number;
  /**
   * Published title of the public dashboard.
   */
  "publicTitle": string;
  /**
   * Quality score of the dashboard.
   */
  "qualityScore": number | null;
  /**
   * List of email addresses for invite-only public dashboards.
   */
  "shareList": Array<string> | null;
  /**
   * Share type of the public dashboard.
   */
  "shareType": string;
  /**
   * User information.
   */
  "sharedBy": DashboardSearchUser;
  /**
   * Status of the public dashboard.
   */
  "status": string;
  /**
   * Unique public dashboard token.
   */
  "token": string;
  /**
   * Dashboard type.
   */
  "type": string;
  /**
   * URL path to the dashboard.
   */
  "url": string;
  /**
   * Number of widgets in the dashboard.
   */
  "widgetCount": number;
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
      type: "DashboardSearchUser",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    embeddableDomains: {
      baseName: "embeddable_domains",
      type: "Array<string>",
      required: true,
    },
    experienceType: {
      baseName: "experience_type",
      type: "string",
      required: true,
    },
    expiration: {
      baseName: "expiration",
      type: "Date",
      required: true,
      format: "date-time",
    },
    hasMonitors: {
      baseName: "has_monitors",
      type: "boolean",
      required: true,
    },
    isFavorited: {
      baseName: "is_favorited",
      type: "boolean",
      required: true,
    },
    isPublicDashboardOwnerless: {
      baseName: "is_public_dashboard_ownerless",
      type: "boolean",
      required: true,
    },
    isShared: {
      baseName: "is_shared",
      type: "boolean",
      required: true,
    },
    lastAccessed: {
      baseName: "last_accessed",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    popularity: {
      baseName: "popularity",
      type: "number",
      required: true,
      format: "double",
    },
    publicTitle: {
      baseName: "public_title",
      type: "string",
      required: true,
    },
    qualityScore: {
      baseName: "quality_score",
      type: "number",
      required: true,
      format: "double",
    },
    shareList: {
      baseName: "share_list",
      type: "Array<string>",
      required: true,
    },
    shareType: {
      baseName: "share_type",
      type: "string",
      required: true,
    },
    sharedBy: {
      baseName: "shared_by",
      type: "DashboardSearchUser",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    token: {
      baseName: "token",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
    widgetCount: {
      baseName: "widget_count",
      type: "number",
      required: true,
      format: "int64",
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
    return DashboardSearchMetadata.attributeTypeMap;
  }

  public constructor() {}
}
