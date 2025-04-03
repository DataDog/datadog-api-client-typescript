import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget request type.
 */
export type TopologyRequestType = typeof TOPOLOGY | UnparsedObject;
export const TOPOLOGY = "topology";
