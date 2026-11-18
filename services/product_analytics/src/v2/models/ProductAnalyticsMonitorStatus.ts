import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current alert status of the monitor. `No Data` is returned when the monitor has not been evaluated yet.
 */
export type ProductAnalyticsMonitorStatus =
  | typeof OK
  | typeof ALERT
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const OK = "OK";
export const ALERT = "Alert";
export const WARN = "Warn";
export const NO_DATA = "No Data";
