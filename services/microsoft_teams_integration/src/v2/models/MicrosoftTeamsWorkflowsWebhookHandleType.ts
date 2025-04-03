import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the Workflows webhook handle resource type.
 */
export type MicrosoftTeamsWorkflowsWebhookHandleType =
  | typeof WORKFLOWS_WEBHOOK_HANDLE
  | UnparsedObject;
export const WORKFLOWS_WEBHOOK_HANDLE = "workflows-webhook-handle";
