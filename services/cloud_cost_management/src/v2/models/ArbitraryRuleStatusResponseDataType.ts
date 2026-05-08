import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom allocation rule status resource type.
 */
export type ArbitraryRuleStatusResponseDataType =
  | typeof ARBITRARY_RULE_STATUS
  | UnparsedObject;
export const ARBITRARY_RULE_STATUS = "arbitrary_rule_status";
