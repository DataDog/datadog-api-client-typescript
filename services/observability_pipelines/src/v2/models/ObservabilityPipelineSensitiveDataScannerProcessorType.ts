import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `sensitive_data_scanner`.
 */
export type ObservabilityPipelineSensitiveDataScannerProcessorType =
  | typeof SENSITIVE_DATA_SCANNER
  | UnparsedObject;
export const SENSITIVE_DATA_SCANNER = "sensitive_data_scanner";
