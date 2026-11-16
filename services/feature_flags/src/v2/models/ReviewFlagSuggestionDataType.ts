import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for reviewing feature flag suggestions.
 */
export type ReviewFlagSuggestionDataType =
  | typeof FLAG_SUGGESTION_EVENTS
  | UnparsedObject;
export const FLAG_SUGGESTION_EVENTS = "flag-suggestion-events";
