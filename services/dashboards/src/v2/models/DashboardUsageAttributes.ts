import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardUsageUser } from "./DashboardUsageUser";

/**
 * Usage statistics for a dashboard. The `viewer` field and all view-count fields (`total_views`, `viewed_at`, `total_views_by_type`) are populated only when Real User Monitoring (RUM) is active for the org.
 */
export class DashboardUsageAttributes {
  /**
   * A user referenced from a dashboard usage record (author or viewer).
   */
  "author"?: DashboardUsageUser;
  /**
   * When the dashboard was created.
   */
  "createdAt"?: Date;
  /**
   * The dashboard quality score ranges from 0 to 1, with higher scores indicating stronger signals of quality
   * and usefulness. The value is `null` when no score is available.
   *
   * The score considers the following factors:
   *
   * - Dashboard and widget naming, including whether the dashboard uses a default or templated name
   * - The number of data widgets, excluding container and text widgets
   * - Confirmed broken queries
   * - Recent activity, based on the last view date or, when no view date is available, the last edit or
   *   creation date
   *
   * Dashboards linked from monitors do not receive lower scores because of their naming or lack of recent
   * activity. An age-based adjustment helps prevent newly created dashboards from receiving disproportionately
   * low scores. Queries lower the score only when confirmed broken.
   */
  "dashboardQualityScore"?: number;
  /**
   * When the dashboard was most recently edited.
   */
  "editedAt"?: Date;
  /**
   * The Datadog organization that owns the dashboard.
   */
  "orgId": number;
  /**
   * Teams the dashboard is tagged with.
   */
  "teams"?: Array<string>;
  /**
   * The dashboard title.
   */
  "title"?: string;
  /**
   * Total view count for the dashboard. Counts only views captured by Real User Monitoring (RUM); `0` in orgs without RUM.
   */
  "totalViews"?: number;
  /**
   * View counts keyed by view type (`in_app`, `embed`, `public`, `shared`, `api`, `unknown`). Counts only views captured by Real User Monitoring (RUM); empty in orgs without RUM.
   */
  "totalViewsByType"?: { [key: string]: number };
  /**
   * When the dashboard was most recently viewed. Populated only when Real User Monitoring (RUM) is active for the org; `null` in orgs without RUM.
   */
  "viewedAt"?: Date;
  /**
   * A user referenced from a dashboard usage record (author or viewer).
   */
  "viewer"?: DashboardUsageUser;
  /**
   * The total number of widgets on the dashboard.
   */
  "widgetCount"?: number;
  /**
   * Widget counts keyed by widget type. The map includes group widgets and widgets without requests.
   */
  "widgetCountByType"?: { [key: string]: number };
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
      type: "DashboardUsageUser",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    dashboardQualityScore: {
      baseName: "dashboard_quality_score",
      type: "number",
      format: "double",
    },
    editedAt: {
      baseName: "edited_at",
      type: "Date",
      format: "date-time",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
    },
    teams: {
      baseName: "teams",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    totalViews: {
      baseName: "total_views",
      type: "number",
      format: "int64",
    },
    totalViewsByType: {
      baseName: "total_views_by_type",
      type: "{ [key: string]: number; }",
    },
    viewedAt: {
      baseName: "viewed_at",
      type: "Date",
      format: "date-time",
    },
    viewer: {
      baseName: "viewer",
      type: "DashboardUsageUser",
    },
    widgetCount: {
      baseName: "widget_count",
      type: "number",
      format: "int64",
    },
    widgetCountByType: {
      baseName: "widget_count_by_type",
      type: "{ [key: string]: number; }",
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
    return DashboardUsageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
