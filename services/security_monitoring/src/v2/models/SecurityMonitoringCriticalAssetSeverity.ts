import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity associated with this critical asset. Either an explicit severity can be set, or the severity can be increased or decreased.
 */
export type SecurityMonitoringCriticalAssetSeverity =
  | typeof INFO
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL
  | typeof INCREASE
  | typeof DECREASE
  | UnparsedObject;
export const INFO = "info";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
export const INCREASE = "increase";
export const DECREASE = "decrease";
