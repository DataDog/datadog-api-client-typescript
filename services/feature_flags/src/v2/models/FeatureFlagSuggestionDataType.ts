import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for feature flag suggestions.
 */
export type FeatureFlagSuggestionDataType =
  | typeof FLAG_SUGGESTIONS
  | UnparsedObject;
export const FLAG_SUGGESTIONS = "flag-suggestions";
