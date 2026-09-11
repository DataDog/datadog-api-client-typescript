import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for default inbox rules.
 */
export type DefaultInboxRuleType = typeof DEFAULT_INBOX_RULES | UnparsedObject;
export const DEFAULT_INBOX_RULES = "default_inbox_rules";
