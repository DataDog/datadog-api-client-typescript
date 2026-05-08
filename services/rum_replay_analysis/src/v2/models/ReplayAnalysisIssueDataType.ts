import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay analysis issue resource type.
 */
export type ReplayAnalysisIssueDataType = typeof ISSUES | UnparsedObject;
export const ISSUES = "issues";
