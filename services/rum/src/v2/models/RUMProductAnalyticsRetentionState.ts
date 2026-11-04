import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls the retention policy for Product Analytics data derived from RUM events.
 * Requests also accept `PREVIEW` (the initial state of a new application, reported as `NONE` in responses). Setting `MAX` requires the `product_analytics_apps_write` permission.
 */
export type RUMProductAnalyticsRetentionState =
  | typeof MAX
  | typeof NONE
  | UnparsedObject;
export const MAX = "MAX";
export const NONE = "NONE";
