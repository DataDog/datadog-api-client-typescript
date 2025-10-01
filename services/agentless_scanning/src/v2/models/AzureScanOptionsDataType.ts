import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `azure_scan_options`.
 */
export type AzureScanOptionsDataType =
  | typeof AZURE_SCAN_OPTIONS
  | UnparsedObject;
export const AZURE_SCAN_OPTIONS = "azure_scan_options";
