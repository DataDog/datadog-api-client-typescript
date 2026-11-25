import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FunnelGroupByDisplay =
  | typeof STACKED
  | typeof SIDE_BY_SIDE
  | UnparsedObject;
export const STACKED = "stacked";
export const SIDE_BY_SIDE = "side_by_side";
