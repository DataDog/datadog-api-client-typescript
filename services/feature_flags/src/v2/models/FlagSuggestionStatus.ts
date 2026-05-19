import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a flag suggestion.
 */
export type FlagSuggestionStatus =
  | typeof PENDING
  | typeof REJECTED
  | typeof APPROVED
  | UnparsedObject;
export const PENDING = "pending";
export const REJECTED = "rejected";
export const APPROVED = "approved";
