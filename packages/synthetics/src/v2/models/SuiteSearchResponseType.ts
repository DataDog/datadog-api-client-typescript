import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type for the Synthetics suites search response, `suites_search`.
 */
export type SuiteSearchResponseType = typeof SUITES_SEARCH | UnparsedObject;
export const SUITES_SEARCH = "suites_search";
