import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for severity modifier rules.
 */
export type SeverityModifierRuleType =
  | typeof SEVERITY_MODIFIER_RULES
  | UnparsedObject;
export const SEVERITY_MODIFIER_RULES = "severity_modifier_rules";
