import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type MetricDatasetMetricScalarAggregation =
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | UnparsedObject;
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
