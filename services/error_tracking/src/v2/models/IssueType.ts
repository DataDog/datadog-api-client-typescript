import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueType = typeof ISSUE | UnparsedObject;
export const ISSUE = "issue";
