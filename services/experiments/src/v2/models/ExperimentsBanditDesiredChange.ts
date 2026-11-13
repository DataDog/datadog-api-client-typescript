import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The direction the bandit optimizes the metric in. It's fixed when the bandit starts. Null before the first saved refresh.
 */
export type ExperimentsBanditDesiredChange =
  | typeof METRIC_INCREASES
  | typeof METRIC_DECREASES
  | UnparsedObject;
export const METRIC_INCREASES = "METRIC_INCREASES";
export const METRIC_DECREASES = "METRIC_DECREASES";
