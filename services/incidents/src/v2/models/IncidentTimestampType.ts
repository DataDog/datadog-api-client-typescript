import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of timestamp to override.
 */
export type IncidentTimestampType =
  | typeof DETECTED
  | typeof RESOLVED
  | typeof DECLARED
  | UnparsedObject;
export const DETECTED = "detected";
export const RESOLVED = "resolved";
export const DECLARED = "declared";
