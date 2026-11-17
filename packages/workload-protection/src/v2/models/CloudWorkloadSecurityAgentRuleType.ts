import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the resource, must always be `agent_rule`
 */
export type CloudWorkloadSecurityAgentRuleType =
  | typeof AGENT_RULE
  | UnparsedObject;
export const AGENT_RULE = "agent_rule";
