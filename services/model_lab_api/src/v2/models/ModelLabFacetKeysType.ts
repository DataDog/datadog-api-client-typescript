import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for a facet keys resource.
 */
export type ModelLabFacetKeysType = typeof FACET_KEYS | UnparsedObject;
export const FACET_KEYS = "facet_keys";
