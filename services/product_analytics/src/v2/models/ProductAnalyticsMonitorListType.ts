import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product Analytics monitor list resource type.
 */
export type ProductAnalyticsMonitorListType =
  | typeof PA_MONITOR_LIST
  | UnparsedObject;
export const PA_MONITOR_LIST = "pa_monitor_list";
