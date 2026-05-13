import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for workflow instances.
 */
export type WorkflowInstanceSummaryDataType =
  | typeof WORKFLOW_INSTANCES
  | UnparsedObject;
export const WORKFLOW_INSTANCES = "workflow-instances";
