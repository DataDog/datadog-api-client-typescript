import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A severity level used to configure due date thresholds.
 */
export type DueDateSeverity =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | typeof INFO
  | typeof NONE
  | typeof UNKNOWN
  | UnparsedObject;
export const CRITICAL = "critical";
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
export const INFO = "info";
export const NONE = "none";
export const UNKNOWN = "unknown";
