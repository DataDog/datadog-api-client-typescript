import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sensitive Data Scanner group type.
 */
export type SensitiveDataScannerGroupType =
  | typeof SENSITIVE_DATA_SCANNER_GROUP
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_GROUP = "sensitive_data_scanner_group";
