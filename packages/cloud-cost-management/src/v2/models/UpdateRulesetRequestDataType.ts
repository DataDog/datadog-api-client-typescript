import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Update ruleset resource type.
 */
export type UpdateRulesetRequestDataType =
  | typeof UPDATE_RULESET
  | UnparsedObject;
export const UPDATE_RULESET = "update_ruleset";
