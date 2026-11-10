import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Rule category. Omitted for custom rules.
 */
export type ArbitraryRuleResponseDataAttributesRuleCategory =
  | typeof CUSTOM
  | typeof AI_GATEWAY
  | UnparsedObject;
export const CUSTOM = "custom";
export const AI_GATEWAY = "ai_gateway";
