import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Uses a numeric field in the log event as the metric increment.
 */
export type ObservabilityPipelineGeneratedMetricIncrementByFieldStrategy =
  | typeof INCREMENT_BY_FIELD
  | UnparsedObject;
export const INCREMENT_BY_FIELD = "increment_by_field";
