import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The lifecycle status of an ownership inference.
 */
export type OwnershipInferenceStatus =
  | typeof SUGGESTED
  | typeof PERSISTED
  | typeof OVERRIDDEN
  | typeof FAILED
  | typeof UNKNOWN
  | UnparsedObject;
export const SUGGESTED = "suggested";
export const PERSISTED = "persisted";
export const OVERRIDDEN = "overridden";
export const FAILED = "failed";
export const UNKNOWN = "unknown";
