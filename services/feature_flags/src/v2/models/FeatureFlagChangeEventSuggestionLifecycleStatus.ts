import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Where the change request is in its lifecycle.
 */
export type FeatureFlagChangeEventSuggestionLifecycleStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof APPLIED
  | typeof REJECTED
  | typeof DISCARDED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const APPLIED = "applied";
export const REJECTED = "rejected";
export const DISCARDED = "discarded";
