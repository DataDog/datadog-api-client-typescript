import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the object.
 */
export type IssueUpdateAssigneeRequestDataType =
  | typeof ASSIGNEE
  | UnparsedObject;
export const ASSIGNEE = "assignee";
