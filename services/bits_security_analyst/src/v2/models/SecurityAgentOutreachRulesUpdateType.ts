import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of an outreach policy rules update request.
 */
export type SecurityAgentOutreachRulesUpdateType =
  | typeof OUTREACH_POLICY_RULES_UPDATE
  | UnparsedObject;
export const OUTREACH_POLICY_RULES_UPDATE = "outreach_policy_rules_update";
