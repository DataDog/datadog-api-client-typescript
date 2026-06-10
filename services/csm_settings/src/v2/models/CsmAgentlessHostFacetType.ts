import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for agentless host facet resources. The value should always be `agentless_host_facet`.
 */
export type CsmAgentlessHostFacetType =
  | typeof AGENTLESS_HOST_FACET
  | UnparsedObject;
export const AGENTLESS_HOST_FACET = "agentless_host_facet";
