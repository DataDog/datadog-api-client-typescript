import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Kind of watch action.
 */
export type IssueWatchActionKind = typeof CHANGE_ISSUE_STATE | UnparsedObject;
export const CHANGE_ISSUE_STATE = "CHANGE_ISSUE_STATE";
