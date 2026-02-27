import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for default rules.
 */
export type DefaultRuleType = typeof DEFAULT_RULE | UnparsedObject;
export const DEFAULT_RULE = "default-rule";
