import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a rule based on a standard machine learning rule.
 */
export type SensitiveDataScannerMachineLearningRuleType =
  | typeof MACHINE_LEARNING_STANDARD_RULE
  | UnparsedObject;
export const MACHINE_LEARNING_STANDARD_RULE = "machine_learning_standard_rule";
