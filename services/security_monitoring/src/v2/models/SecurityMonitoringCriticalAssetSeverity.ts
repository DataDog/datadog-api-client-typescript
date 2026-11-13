import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Severity associated with this dynamic severity rule (previously called critical assets). Either an explicit severity can be set, or the severity can be increased or decreased, or the severity can be left unchanged (no-op).
 */
export type SecurityMonitoringCriticalAssetSeverity =
  | typeof INFO
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL
  | typeof INCREASE
  | typeof DECREASE
  | typeof NO_OP
  | UnparsedObject;
export const INFO = "info";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
export const INCREASE = "increase";
export const DECREASE = "decrease";
export const NO_OP = "no-op";
