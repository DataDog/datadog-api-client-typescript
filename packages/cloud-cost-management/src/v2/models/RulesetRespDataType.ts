import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Ruleset resource type.
 */
export type RulesetRespDataType = typeof RULESET | UnparsedObject;
export const RULESET = "ruleset";
