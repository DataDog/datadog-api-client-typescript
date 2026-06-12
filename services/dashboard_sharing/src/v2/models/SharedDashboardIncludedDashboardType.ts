import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Included dashboard resource type.
 */
export type SharedDashboardIncludedDashboardType =
  | typeof DASHBOARD
  | UnparsedObject;
export const DASHBOARD = "dashboard";
