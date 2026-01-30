import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type for workflow headless execution response
 */
export type WorkflowHeadlessExecutionResponseType =
  | typeof WORKFLOW_HEADLESS_EXECUTION
  | UnparsedObject;
export const WORKFLOW_HEADLESS_EXECUTION = "workflow_headless_execution";
