import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The impact level of the flaky test, derived from its impact score.
 */
export type FlakyTestImpactLevel =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
