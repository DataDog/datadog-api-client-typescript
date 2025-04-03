import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sensitive Data Scanner configuration type.
 */
export type SensitiveDataScannerConfigurationType =
  | typeof SENSITIVE_DATA_SCANNER_CONFIGURATIONS
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER_CONFIGURATIONS = "sensitive_data_scanner_configuration";
