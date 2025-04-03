import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `agent_rule`.
 */
export type CloudWorkloadSecurityAgentRuleType =
  | typeof AGENT_RULE
  | UnparsedObject;
export const AGENT_RULE = "agent_rule";
