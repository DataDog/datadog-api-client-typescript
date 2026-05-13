import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for AI workflows.
 */
export type AIWorkflowDataType = typeof AI_WORKFLOWS | UnparsedObject;
export const AI_WORKFLOWS = "ai-workflows";
