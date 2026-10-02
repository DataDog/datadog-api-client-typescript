import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cancel experiment request resource type.
 */
export type ExperimentsCancelExperimentV2RequestDataType =
  | typeof CANCEL_EXPERIMENT_REQUEST
  | UnparsedObject;
export const CANCEL_EXPERIMENT_REQUEST = "cancel-experiment-request";
