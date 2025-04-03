import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sensitive Data Scanner standard pattern type.
 */
export type SensitiveDataScannerStandardPatternType =
  | typeof SENSITIVE_DATA_SCANNER_STANDARD_PATTERN
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_STANDARD_PATTERN = "sensitive_data_scanner_standard_pattern";
