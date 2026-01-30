import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type for workflow headless execution request
 */
export type WorkflowHeadlessExecutionRequestType =
  | typeof WORKFLOW_HEADLESS_EXECUTION_REQUEST
  | UnparsedObject;
export const WORKFLOW_HEADLESS_EXECUTION_REQUEST =
  "workflow_headless_execution_request";
