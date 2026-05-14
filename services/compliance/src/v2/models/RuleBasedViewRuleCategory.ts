import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The category of the security rule.
 */
export type RuleBasedViewRuleCategory =
  | typeof CLOUD_CONFIGURATION
  | typeof INFRASTRUCTURE_CONFIGURATION
  | typeof API_SECURITY
  | UnparsedObject;
export const CLOUD_CONFIGURATION = "cloud_configuration";
export const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export const API_SECURITY = "api_security";
