import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of standard rule, based on how it detects sensitive data.
 */
export type SensitiveDataScannerStandardRuleType =
  | typeof REGEX_STANDARD_RULE
  | typeof MACHINE_LEARNING_STANDARD_RULE
  | UnparsedObject;
export const REGEX_STANDARD_RULE = "regex_standard_rule";
export const MACHINE_LEARNING_STANDARD_RULE = "machine_learning_standard_rule";
