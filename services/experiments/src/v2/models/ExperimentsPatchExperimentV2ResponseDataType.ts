import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Experiments resource type.
 */
export type ExperimentsPatchExperimentV2ResponseDataType =
  | typeof EXPERIMENTS
  | UnparsedObject;
export const EXPERIMENTS = "experiments";
