import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sensitive Data Scanner rule type.
 */
export type SensitiveDataScannerRuleType =
  | typeof SENSITIVE_DATA_SCANNER_RULE
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_RULE = "sensitive_data_scanner_rule";
