import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Projection type. Each result row is a node.
 */
export type TopologyRequestCustomProjectionType =
  | typeof CUSTOM_TOPOLOGY_MAP_NODE
  | UnparsedObject;
export const CUSTOM_TOPOLOGY_MAP_NODE = "custom_topology_map_node";
