import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The dimension to aggregate issue counts by. Only `issue_type` is supported.
 */
export type AgentHealthIssuesCountBy = typeof ISSUE_TYPE | UnparsedObject;
export const ISSUE_TYPE = "issue_type";
