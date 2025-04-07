import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The in progress status of the pipeline.
 */
export type CIAppPipelineEventPipelineInProgressStatus =
  | typeof RUNNING
  | UnparsedObject;
export const RUNNING = "running";
