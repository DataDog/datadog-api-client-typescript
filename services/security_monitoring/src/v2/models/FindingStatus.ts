import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the finding.
 */
export type FindingStatus =
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
