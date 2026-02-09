import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type for workflow favorite request
 */
export type WorkflowFavoriteRequestType =
  | typeof WORKFLOW_FAVORITE_REQUEST
  | UnparsedObject;
export const WORKFLOW_FAVORITE_REQUEST = "workflow_favorite_request";
