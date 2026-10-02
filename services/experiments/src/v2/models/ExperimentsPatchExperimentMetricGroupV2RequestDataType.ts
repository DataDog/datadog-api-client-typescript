import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Experiment metric groups resource type.
 */
export type ExperimentsPatchExperimentMetricGroupV2RequestDataType =
  | typeof EXPERIMENT_METRIC_GROUPS
  | UnparsedObject;
export const EXPERIMENT_METRIC_GROUPS = "experiment-metric-groups";
