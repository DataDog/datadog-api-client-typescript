import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for a node rolled up into an aggregated node.
 */
export type ProductAnalyticsSankeyAggregatedNodeType =
  | typeof AGGREGATED
  | UnparsedObject;
export const AGGREGATED = "aggregated";
