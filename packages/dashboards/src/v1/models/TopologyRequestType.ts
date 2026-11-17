import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Widget request type.
 */
export type TopologyRequestType = typeof TOPOLOGY | UnparsedObject;
export const TOPOLOGY = "topology";
