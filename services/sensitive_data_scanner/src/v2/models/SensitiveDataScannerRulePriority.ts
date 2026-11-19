import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity of the issues found by the rule.
 */
export type SensitiveDataScannerRulePriority =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | typeof INFO
  | UnparsedObject;
export const CRITICAL = "critical";
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
export const INFO = "info";
