import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `custom_rule`.
 */
export type ApplicationSecurityWafCustomRuleType =
  | typeof CUSTOM_RULE
  | UnparsedObject;
export const CUSTOM_RULE = "custom_rule";
