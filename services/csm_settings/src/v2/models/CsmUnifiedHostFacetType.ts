import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for unified host facet resources. The value should always be `unified_host_facet`.
 */
export type CsmUnifiedHostFacetType =
  | typeof UNIFIED_HOST_FACET
  | UnparsedObject;
export const UNIFIED_HOST_FACET = "unified_host_facet";
