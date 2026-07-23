import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The ownership confidence level.
 */
export type OwnershipConfidenceLevel =
  | typeof HIGH
  | typeof MEDIUM
  | typeof LOW
  | UnparsedObject;
export const HIGH = "high";
export const MEDIUM = "medium";
export const LOW = "low";
