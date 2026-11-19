import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a custom rule.
 */
export type SensitiveDataScannerCustomRegexRuleType =
  | typeof REGEX_CUSTOM_RULE
  | UnparsedObject;
export const REGEX_CUSTOM_RULE = "regex_custom_rule";
