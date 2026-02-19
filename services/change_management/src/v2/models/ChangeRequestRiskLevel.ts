import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The risk level of the change request.
 */
export type ChangeRequestRiskLevel =
  | typeof UNDEFINED
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | UnparsedObject;
export const UNDEFINED = "UNDEFINED";
export const LOW = "LOW";
export const MEDIUM = "MEDIUM";
export const HIGH = "HIGH";
