import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for inbox rules.
 */
export type InboxRuleType = typeof INBOX_RULES | UnparsedObject;
export const INBOX_RULES = "inbox_rules";
