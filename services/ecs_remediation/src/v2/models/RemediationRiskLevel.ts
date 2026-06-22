import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Estimated risk of a remediation step or proposed fix.
 */
export type RemediationRiskLevel =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
