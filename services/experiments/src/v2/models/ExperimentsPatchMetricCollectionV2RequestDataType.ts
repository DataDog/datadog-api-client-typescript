import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Metric collections resource type.
 */
export type ExperimentsPatchMetricCollectionV2RequestDataType =
  | typeof METRIC_COLLECTIONS
  | UnparsedObject;
export const METRIC_COLLECTIONS = "metric-collections";
