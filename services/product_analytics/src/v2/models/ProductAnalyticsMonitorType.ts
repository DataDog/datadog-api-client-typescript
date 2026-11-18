import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product Analytics monitor resource type.
 */
export type ProductAnalyticsMonitorType = typeof PA_MONITOR | UnparsedObject;
export const PA_MONITOR = "pa_monitor";
