import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident rule execution state resource type.
 */
export type IncidentRuleExecutionStateType =
  | typeof INCIDENT_RULE_EXECUTION_STATES
  | UnparsedObject;
export const INCIDENT_RULE_EXECUTION_STATES = "incident_rule_execution_states";
