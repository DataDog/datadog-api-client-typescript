import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity to apply to the findings.
 * `info` sets the lowest severity the finding type allows.
 */
export type SeverityOverrideValue =
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
