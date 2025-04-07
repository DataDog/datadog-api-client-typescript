import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The final status of the step.
 */
export type CIAppPipelineEventStepStatus =
  | typeof SUCCESS
  | typeof ERROR
  | UnparsedObject;
export const SUCCESS = "success";
export const ERROR = "error";
