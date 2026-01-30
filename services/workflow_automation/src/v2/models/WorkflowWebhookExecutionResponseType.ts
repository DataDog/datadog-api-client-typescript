import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type for workflow webhook execution response
 */
export type WorkflowWebhookExecutionResponseType =
  | typeof WORKFLOW_WEBHOOK_EXECUTION
  | UnparsedObject;
export const WORKFLOW_WEBHOOK_EXECUTION = "workflow_webhook_execution";
