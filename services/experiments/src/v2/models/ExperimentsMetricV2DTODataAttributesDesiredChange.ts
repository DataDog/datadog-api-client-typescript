import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Direction of metric change considered desirable.
 */
export type ExperimentsMetricV2DTODataAttributesDesiredChange =
  | typeof METRIC_INCREASES
  | typeof METRIC_DECREASES
  | typeof UNKNOWN
  | UnparsedObject;
export const METRIC_INCREASES = "METRIC_INCREASES";
export const METRIC_DECREASES = "METRIC_DECREASES";
export const UNKNOWN = "UNKNOWN";
