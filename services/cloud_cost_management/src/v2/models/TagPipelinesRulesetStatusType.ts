import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Tag pipeline ruleset status resource type.
 */
export type TagPipelinesRulesetStatusType =
  | typeof RULESET_STATUS
  | UnparsedObject;
export const RULESET_STATUS = "ruleset_status";
