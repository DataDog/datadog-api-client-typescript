import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the topology map widget.
 */
export type TopologyMapWidgetDefinitionType =
  | typeof TOPOLOGY_MAP
  | UnparsedObject;
export const TOPOLOGY_MAP = "topology_map";
