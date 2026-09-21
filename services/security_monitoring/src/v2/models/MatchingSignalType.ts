import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `matching_signal`.
 */
export type MatchingSignalType = typeof MATCHING_SIGNAL | UnparsedObject;
export const MATCHING_SIGNAL = "matching_signal";
