import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The severity to assign to matched findings. `info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types.
 */
export type SeverityModifierSeverity =
  | typeof INFO_NONE
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof CRITICAL
  | UnparsedObject;
export const INFO_NONE = "info_none";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const CRITICAL = "critical";
