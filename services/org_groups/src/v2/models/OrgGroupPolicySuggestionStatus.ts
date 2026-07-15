import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the policy suggestion.
 */
export type OrgGroupPolicySuggestionStatus =
  | typeof PENDING
  | typeof ACCEPTED
  | typeof DISMISSED
  | UnparsedObject;
export const PENDING = "pending";
export const ACCEPTED = "accepted";
export const DISMISSED = "dismissed";
