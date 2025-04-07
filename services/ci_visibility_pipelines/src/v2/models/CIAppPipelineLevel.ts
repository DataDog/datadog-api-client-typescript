import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Pipeline execution level.
 */
export type CIAppPipelineLevel =
  | typeof PIPELINE
  | typeof STAGE
  | typeof JOB
  | typeof STEP
  | typeof CUSTOM
  | UnparsedObject;
export const PIPELINE = "pipeline";
export const STAGE = "stage";
export const JOB = "job";
export const STEP = "step";
export const CUSTOM = "custom";
