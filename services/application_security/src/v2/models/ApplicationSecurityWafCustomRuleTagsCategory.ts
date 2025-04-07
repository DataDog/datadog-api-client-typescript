import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The category of the WAF Rule, can be either `business_logic`, `attack_attempt` or `security_response`.
 */
export type ApplicationSecurityWafCustomRuleTagsCategory =
  | typeof ATTACK_ATTEMPT
  | typeof BUSINESS_LOGIC
  | typeof SECURITY_RESPONSE
  | UnparsedObject;
export const ATTACK_ATTEMPT = "attack_attempt";
export const BUSINESS_LOGIC = "business_logic";
export const SECURITY_RESPONSE = "security_response";
