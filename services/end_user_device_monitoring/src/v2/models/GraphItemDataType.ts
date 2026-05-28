import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Graph items resource type.
 */
export type GraphItemDataType = typeof GRAPH_ITEMS | UnparsedObject;
export const GRAPH_ITEMS = "graph_items";
