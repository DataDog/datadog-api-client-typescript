import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Shared dashboard resource type.
 */
export type SharedDashboardType = typeof SHARED_DASHBOARD | UnparsedObject;
export const SHARED_DASHBOARD = "shared_dashboard";
