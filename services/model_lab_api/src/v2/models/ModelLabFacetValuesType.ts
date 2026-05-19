import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for a facet values resource.
 */
export type ModelLabFacetValuesType = typeof FACET_VALUES | UnparsedObject;
export const FACET_VALUES = "facet_values";
