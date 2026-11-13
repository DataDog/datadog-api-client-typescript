import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The lifecycle status of the suggestion.
 */
export type FeatureFlagSuggestionAttributesLifecycleStatus =
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
