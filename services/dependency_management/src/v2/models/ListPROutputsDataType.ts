import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for workflow execution PR outputs.
 */
export type ListPROutputsDataType =
  | typeof WORKFLOW_EXECUTION_PR_OUTPUTS
  | UnparsedObject;
export const WORKFLOW_EXECUTION_PR_OUTPUTS = "workflow-execution-pr-outputs";
