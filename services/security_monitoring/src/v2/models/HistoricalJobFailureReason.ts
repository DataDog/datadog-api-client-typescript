import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reason why the job failed.
 */
export type HistoricalJobFailureReason =
  | typeof RULE_CONFIGURATION
  | typeof QUERY_TOO_EXPENSIVE
  | typeof INTERNAL_ERROR
  | UnparsedObject;
export const RULE_CONFIGURATION = "rule_configuration";
export const QUERY_TOO_EXPENSIVE = "query_too_expensive";
export const INTERNAL_ERROR = "internal_error";
