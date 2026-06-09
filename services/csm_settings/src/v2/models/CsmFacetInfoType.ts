import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for facet info resources. The value should always be `facet_info`.
 */
export type CsmFacetInfoType = typeof FACET_INFO | UnparsedObject;
export const FACET_INFO = "facet_info";
