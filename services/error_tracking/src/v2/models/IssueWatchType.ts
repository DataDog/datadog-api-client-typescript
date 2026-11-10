import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueWatchType = typeof ERROR_TRACKING_ISSUE_WATCH | UnparsedObject;
export const ERROR_TRACKING_ISSUE_WATCH = "error_tracking_issue_watch";
