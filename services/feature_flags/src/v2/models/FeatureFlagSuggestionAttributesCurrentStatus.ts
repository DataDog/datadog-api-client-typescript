import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The legacy review status. Use `lifecycle_status` to distinguish approval from application.
 */
export type FeatureFlagSuggestionAttributesCurrentStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof REJECTED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const REJECTED = "rejected";
