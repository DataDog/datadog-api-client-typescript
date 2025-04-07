import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident search result type.
 */
export type IncidentSearchResultsType =
  | typeof INCIDENTS_SEARCH_RESULTS
  | UnparsedObject;
export const INCIDENTS_SEARCH_RESULTS = "incidents_search_results";
