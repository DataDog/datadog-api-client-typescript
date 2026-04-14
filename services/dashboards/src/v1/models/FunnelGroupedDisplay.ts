import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Display mode for grouped funnel results.
 */
export type FunnelGroupedDisplay =
  | typeof STACKED
  | typeof SIDE_BY_SIDE
  | UnparsedObject;
export const STACKED = "stacked";
export const SIDE_BY_SIDE = "side_by_side";
