import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Direction of change that represents an improvement for this metric.
 */
export type ExperimentsCreateMetricV2RequestDataAttributesDesiredChange =
  | typeof METRIC_INCREASES
  | typeof METRIC_DECREASES
  | UnparsedObject;
export const METRIC_INCREASES = "METRIC_INCREASES";
export const METRIC_DECREASES = "METRIC_DECREASES";
