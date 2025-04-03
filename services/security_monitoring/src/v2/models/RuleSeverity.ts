import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity of a security rule.
 */
export type RuleSeverity =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | typeof UNKNOWN
  | typeof INFO
  | UnparsedObject;
export const CRITICAL = "critical";
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
export const UNKNOWN = "unknown";
export const INFO = "info";
