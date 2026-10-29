import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of layout algorithm.
 */
export type TopologyMapLayoutType = typeof HIERARCHICAL | UnparsedObject;
export const HIERARCHICAL = "hierarchical";
