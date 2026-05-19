import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. Always `dashboards-usages`.
 */
export type DashboardUsageType = typeof DASHBOARDS_USAGES | UnparsedObject;
export const DASHBOARDS_USAGES = "dashboards-usages";
