import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Ruleset resource type.
 */
export type RulesetRespDataType = typeof RULESET | UnparsedObject;
export const RULESET = "ruleset";
