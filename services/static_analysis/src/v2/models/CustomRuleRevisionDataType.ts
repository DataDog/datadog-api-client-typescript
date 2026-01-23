import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type
 */
export type CustomRuleRevisionDataType =
  | typeof CUSTOM_RULE_REVISION
  | UnparsedObject;
export const CUSTOM_RULE_REVISION = "custom_rule_revision";
