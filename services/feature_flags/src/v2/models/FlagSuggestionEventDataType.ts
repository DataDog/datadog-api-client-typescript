import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Flag suggestion events resource type.
 */
export type FlagSuggestionEventDataType =
  | typeof FLAG_SUGGESTION_EVENTS
  | UnparsedObject;
export const FLAG_SUGGESTION_EVENTS = "flag-suggestion-events";
