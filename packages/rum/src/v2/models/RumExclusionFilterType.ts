import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type. The value must be `exclusion_filters`.
 */
export type RumExclusionFilterType = typeof EXCLUSION_FILTERS | UnparsedObject;
export const EXCLUSION_FILTERS = "exclusion_filters";
