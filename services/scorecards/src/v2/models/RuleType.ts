import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for scorecard rules.
 */
export type RuleType = typeof RULE | UnparsedObject;
export const RULE = "rule";
