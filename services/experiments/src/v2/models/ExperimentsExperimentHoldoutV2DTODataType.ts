import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Experiment holdout resource type.
 */
export type ExperimentsExperimentHoldoutV2DTODataType =
  | typeof EXPERIMENT_HOLDOUTS
  | UnparsedObject;
export const EXPERIMENT_HOLDOUTS = "experiment-holdouts";
