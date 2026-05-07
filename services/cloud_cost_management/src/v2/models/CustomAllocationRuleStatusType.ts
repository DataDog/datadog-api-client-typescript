import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom allocation rule status resource type.
 */
export type CustomAllocationRuleStatusType =
  | typeof ARBITRARY_RULE_STATUS
  | UnparsedObject;
export const ARBITRARY_RULE_STATUS = "arbitrary_rule_status";
