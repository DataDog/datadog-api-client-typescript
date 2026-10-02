import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Conclude experiment request resource type.
 */
export type ExperimentsConcludeExperimentV2RequestDataType =
  | typeof CONCLUDE_EXPERIMENT_REQUEST
  | UnparsedObject;
export const CONCLUDE_EXPERIMENT_REQUEST = "conclude-experiment-request";
