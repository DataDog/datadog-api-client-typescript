import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The review status of the change request.
 */
export type FeatureFlagChangeEventSuggestionStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof REJECTED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const REJECTED = "rejected";
