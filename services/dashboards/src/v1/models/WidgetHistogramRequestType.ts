import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for the histogram request.
 */
export type WidgetHistogramRequestType = typeof HISTOGRAM | UnparsedObject;
export const HISTOGRAM = "histogram";
