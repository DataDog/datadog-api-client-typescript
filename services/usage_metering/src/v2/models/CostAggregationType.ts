import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls how costs are aggregated when using `start_date`. The `cumulative` option returns month-to-date running totals.
 */
export type CostAggregationType = typeof CUMULATIVE | UnparsedObject;
export const CUMULATIVE = "cumulative";
