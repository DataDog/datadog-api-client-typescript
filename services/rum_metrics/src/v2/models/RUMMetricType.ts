import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value must be `rum_metrics`.
 */
export type RUMMetricType = typeof RUM_METRICS | UnparsedObject;
export const RUM_METRICS = "rum_metrics";
