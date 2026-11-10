import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssuePullRequestType =
  | typeof ERROR_TRACKING_PULL_REQUEST
  | UnparsedObject;
export const ERROR_TRACKING_PULL_REQUEST = "error_tracking_pull_request";
