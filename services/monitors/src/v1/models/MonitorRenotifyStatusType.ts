import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The different statuses for which renotification is supported.
 */
export type MonitorRenotifyStatusType =
  | typeof ALERT
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const ALERT = "alert";
export const WARN = "warn";
export const NO_DATA = "no data";
