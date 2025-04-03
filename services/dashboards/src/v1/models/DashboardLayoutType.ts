import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Layout type of the dashboard.
 */
export type DashboardLayoutType = typeof ORDERED | typeof FREE | UnparsedObject;
export const ORDERED = "ordered";
export const FREE = "free";
