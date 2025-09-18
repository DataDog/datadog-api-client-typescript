import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Create ruleset resource type.
 */
export type CreateRulesetRequestDataType =
  | typeof CREATE_RULESET
  | UnparsedObject;
export const CREATE_RULESET = "create_ruleset";
