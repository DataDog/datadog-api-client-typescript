import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The in-progress status of the job.
 */
export type CIAppPipelineEventJobInProgressStatus =
  | typeof RUNNING
  | UnparsedObject;
export const RUNNING = "running";
