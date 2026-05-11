import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Ruleset status resource type.
 */
export type RulesetStatusRespDataType = typeof RULESET_STATUS | UnparsedObject;
export const RULESET_STATUS = "ruleset_status";
