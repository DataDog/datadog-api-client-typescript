import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dashboard resource type.
 */
export type MetricDashboardType = typeof DASHBOARDS | UnparsedObject;
export const DASHBOARDS = "dashboards";
