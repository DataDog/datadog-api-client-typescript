import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Start experiment request resource type.
 */
export type ExperimentsStartExperimentV2RequestDataType =
  | typeof START_EXPERIMENT_REQUEST
  | UnparsedObject;
export const START_EXPERIMENT_REQUEST = "start-experiment-request";
