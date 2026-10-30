import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Edge endpoint the column holds.
 */
export type TopologyMapInlineEdgeColumnId =
  | typeof SOURCE
  | typeof TARGET
  | UnparsedObject;
export const SOURCE = "source";
export const TARGET = "target";
