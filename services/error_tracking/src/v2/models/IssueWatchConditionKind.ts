import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Kind of watch condition.
 */
export type IssueWatchConditionKind =
  | typeof OCCURRENCES
  | typeof CARDINALITY
  | typeof ELAPSED_TIME
  | typeof ANY
  | typeof ALL
  | UnparsedObject;
export const OCCURRENCES = "OCCURRENCES";
export const CARDINALITY = "CARDINALITY";
export const ELAPSED_TIME = "ELAPSED_TIME";
export const ANY = "ANY";
export const ALL = "ALL";
