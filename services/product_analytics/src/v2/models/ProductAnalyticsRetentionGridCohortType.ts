import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the row holds one cohort's own numbers, or the weighted roll-up across every cohort.
 */
export type ProductAnalyticsRetentionGridCohortType =
  | typeof RAW
  | typeof AGGREGATED
  | UnparsedObject;
export const RAW = "raw";
export const AGGREGATED = "aggregated";
