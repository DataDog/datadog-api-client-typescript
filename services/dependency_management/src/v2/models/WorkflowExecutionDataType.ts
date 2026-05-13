import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for workflow executions.
 */
export type WorkflowExecutionDataType =
  | typeof WORKFLOW_EXECUTIONS
  | UnparsedObject;
export const WORKFLOW_EXECUTIONS = "workflow-executions";
