import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The ways searched incidents can be sorted.
 */
export type IncidentSearchIncidentsSortOrder =
  | typeof CREATED_ASCENDING
  | typeof CREATED_DESCENDING
  | typeof MODIFIED_ASCENDING
  | typeof MODIFIED_DESCENDING
  | UnparsedObject;
export const CREATED_ASCENDING = "created";
export const CREATED_DESCENDING = "-created";
export const MODIFIED_ASCENDING = "modified";
export const MODIFIED_DESCENDING = "-modified";
