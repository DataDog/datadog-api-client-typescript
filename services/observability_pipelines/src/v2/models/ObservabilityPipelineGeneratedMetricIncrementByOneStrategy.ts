import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Increments the metric by 1 for each matching event.
 */
export type ObservabilityPipelineGeneratedMetricIncrementByOneStrategy =
  | typeof INCREMENT_BY_ONE
  | UnparsedObject;
export const INCREMENT_BY_ONE = "increment_by_one";
