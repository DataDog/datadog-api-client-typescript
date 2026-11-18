import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a rule based on a standard regex rule.
 */
export type SensitiveDataScannerStandardRegexRuleType =
  | typeof REGEX_STANDARD_RULE
  | UnparsedObject;
export const REGEX_STANDARD_RULE = "regex_standard_rule";
