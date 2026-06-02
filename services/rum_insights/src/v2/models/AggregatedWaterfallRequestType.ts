import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for aggregated waterfall requests.
 */
export type AggregatedWaterfallRequestType =
  | typeof AGGREGATED_WATERFALL
  | UnparsedObject;
export const AGGREGATED_WATERFALL = "aggregated_waterfall";
