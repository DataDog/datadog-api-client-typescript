import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for mute rules.
 */
export type MuteRuleType = typeof MUTE_RULES | UnparsedObject;
export const MUTE_RULES = "mute_rules";
