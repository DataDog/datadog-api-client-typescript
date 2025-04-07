import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dashboard resource type.
 */
export type DashboardResourceType = typeof DASHBOARD | UnparsedObject;
export const DASHBOARD = "dashboard";
