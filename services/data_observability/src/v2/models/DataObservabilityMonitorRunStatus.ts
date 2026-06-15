import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a data observability monitor run.
 */
export type DataObservabilityMonitorRunStatus =
  | typeof PENDING
  | typeof OK
  | typeof WARN
  | typeof ALERT
  | typeof ERROR
  | UnparsedObject;
export const PENDING = "pending";
export const OK = "ok";
export const WARN = "warn";
export const ALERT = "alert";
export const ERROR = "error";
