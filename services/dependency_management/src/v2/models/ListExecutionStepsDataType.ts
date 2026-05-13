import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for workflow execution steps.
 */
export type ListExecutionStepsDataType =
  | typeof WORKFLOW_EXECUTION_STEPS
  | UnparsedObject;
export const WORKFLOW_EXECUTION_STEPS = "workflow-execution-steps";
