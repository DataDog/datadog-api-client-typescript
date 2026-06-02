import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Performance metric used to filter view instances by threshold.
 */
export type AggregatedWaterfallPerformanceCriteriaMetric =
  | typeof LOADING_TIME
  | typeof LARGEST_CONTENTFUL_PAINT
  | typeof FIRST_CONTENTFUL_PAINT
  | typeof INTERACTION_TO_NEXT_PAINT
  | UnparsedObject;
export const LOADING_TIME = "loading_time";
export const LARGEST_CONTENTFUL_PAINT = "largest_contentful_paint";
export const FIRST_CONTENTFUL_PAINT = "first_contentful_paint";
export const INTERACTION_TO_NEXT_PAINT = "interaction_to_next_paint";
