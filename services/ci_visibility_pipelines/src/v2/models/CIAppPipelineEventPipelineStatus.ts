import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The final status of the pipeline.
 */
export type CIAppPipelineEventPipelineStatus =
  | typeof SUCCESS
  | typeof ERROR
  | typeof CANCELED
  | typeof SKIPPED
  | typeof BLOCKED
  | UnparsedObject;
export const SUCCESS = "success";
export const ERROR = "error";
export const CANCELED = "canceled";
export const SKIPPED = "skipped";
export const BLOCKED = "blocked";
