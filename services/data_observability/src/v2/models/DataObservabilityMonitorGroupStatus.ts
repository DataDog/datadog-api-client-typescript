import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of a monitor group, from the alerting engine.
 */
export type DataObservabilityMonitorGroupStatus =
  | typeof OK
  | typeof WARN
  | typeof ALERT
  | typeof NO_DATA
  | typeof UNKNOWN
  | UnparsedObject;
export const OK = "ok";
export const WARN = "warn";
export const ALERT = "alert";
export const NO_DATA = "no_data";
export const UNKNOWN = "unknown";
