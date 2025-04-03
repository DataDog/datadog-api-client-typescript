import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The ways searched incidents can be sorted.
 */
export type IncidentSearchSortOrder =
  | typeof CREATED_ASCENDING
  | typeof CREATED_DESCENDING
  | UnparsedObject;
export const CREATED_ASCENDING = "created";
export const CREATED_DESCENDING = "-created";
