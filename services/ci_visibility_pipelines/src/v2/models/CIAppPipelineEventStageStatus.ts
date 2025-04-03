import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The final status of the stage.
 */
export type CIAppPipelineEventStageStatus =
  | typeof SUCCESS
  | typeof ERROR
  | typeof CANCELED
  | typeof SKIPPED
  | UnparsedObject;
export const SUCCESS = "success";
export const ERROR = "error";
export const CANCELED = "canceled";
export const SKIPPED = "skipped";
