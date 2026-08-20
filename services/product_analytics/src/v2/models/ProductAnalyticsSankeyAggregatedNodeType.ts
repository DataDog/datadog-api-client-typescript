import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a node rolled up into an aggregated node.
 */
export type ProductAnalyticsSankeyAggregatedNodeType =
  | typeof AGGREGATED
  | UnparsedObject;
export const AGGREGATED = "aggregated";
