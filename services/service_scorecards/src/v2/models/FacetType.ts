import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for facets.
 */
export type FacetType = typeof FACET | UnparsedObject;
export const FACET = "facet";
