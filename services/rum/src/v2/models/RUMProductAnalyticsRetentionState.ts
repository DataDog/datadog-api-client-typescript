import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls the retention policy for Product Analytics data derived from RUM events.
 */
export type RUMProductAnalyticsRetentionState =
  | typeof MAX
  | typeof NONE
  | UnparsedObject;
export const MAX = "MAX";
export const NONE = "NONE";
