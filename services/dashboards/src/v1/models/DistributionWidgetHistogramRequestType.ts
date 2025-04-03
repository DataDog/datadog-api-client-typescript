import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for the histogram request.
 */
export type DistributionWidgetHistogramRequestType =
  | typeof HISTOGRAM
  | UnparsedObject;
export const HISTOGRAM = "histogram";
