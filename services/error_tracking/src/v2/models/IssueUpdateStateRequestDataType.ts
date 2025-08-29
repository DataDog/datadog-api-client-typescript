import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueUpdateStateRequestDataType =
  | typeof ERROR_TRACKING_ISSUE
  | UnparsedObject;
export const ERROR_TRACKING_ISSUE = "error_tracking_issue";
