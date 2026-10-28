import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule proposal resource type. The value is always `rule_proposals`.
 */
export type SecurityMonitoringRuleProposalType =
  | typeof RULE_PROPOSALS
  | UnparsedObject;
export const RULE_PROPOSALS = "rule_proposals";
