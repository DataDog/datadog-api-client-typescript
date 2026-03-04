import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for distribution of point values for distribution metrics. Query space aggregator must be `histogram:<metric name>` for points distributions.
 */
export type WidgetHistogramRequestType = typeof HISTOGRAM | UnparsedObject;
export const HISTOGRAM = "histogram";
