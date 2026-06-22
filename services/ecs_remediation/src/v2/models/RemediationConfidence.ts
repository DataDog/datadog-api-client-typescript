import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The agent's self-rated confidence in a plan.
 */
export type RemediationConfidence =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
