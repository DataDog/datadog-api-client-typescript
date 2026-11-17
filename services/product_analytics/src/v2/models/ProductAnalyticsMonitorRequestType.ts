import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product Analytics monitor request resource type.
 */
export type ProductAnalyticsMonitorRequestType =
  | typeof PA_MONITOR_REQUEST
  | UnparsedObject;
export const PA_MONITOR_REQUEST = "pa_monitor_request";
