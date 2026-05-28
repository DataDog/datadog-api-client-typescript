import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Issue definitions resource type.
 */
export type IssueDefinitionDataType = typeof ISSUE_DEFINITIONS | UnparsedObject;
export const ISSUE_DEFINITIONS = "issue_definitions";
