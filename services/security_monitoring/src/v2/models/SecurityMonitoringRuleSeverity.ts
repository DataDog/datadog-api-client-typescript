import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity of the Security Signal.
 */
export type SecurityMonitoringRuleSeverity =
  | typeof INFO
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL
  | UnparsedObject;
export const INFO = "info";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
