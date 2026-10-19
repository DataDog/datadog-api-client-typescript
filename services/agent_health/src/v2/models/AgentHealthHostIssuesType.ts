import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Agent Health issue resource type.
 */
export type AgentHealthHostIssuesType =
  | typeof AGENT_HEALTH_ISSUES
  | UnparsedObject;
export const AGENT_HEALTH_ISSUES = "agent_health_issues";
