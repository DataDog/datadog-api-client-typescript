import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of facet for filtering Model Lab projects.
 */
export type ModelLabProjectFacetType = typeof TAG | UnparsedObject;
export const TAG = "tag";
