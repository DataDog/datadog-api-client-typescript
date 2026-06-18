import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for due date rules.
 */
export type DueDateRuleType = typeof DUE_DATE_RULES | UnparsedObject;
export const DUE_DATE_RULES = "due_date_rules";
