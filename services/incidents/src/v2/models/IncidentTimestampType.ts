import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of timestamp to override.
 */
export type IncidentTimestampType =
  | typeof CREATED
  | typeof DETECTED
  | typeof RESOLVED
  | typeof DECLARED
  | UnparsedObject;
export const CREATED = "created";
export const DETECTED = "detected";
export const RESOLVED = "resolved";
export const DECLARED = "declared";
