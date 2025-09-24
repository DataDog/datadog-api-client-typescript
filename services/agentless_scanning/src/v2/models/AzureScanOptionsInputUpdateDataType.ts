import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Azure scan options resource type.
 */
export type AzureScanOptionsInputUpdateDataType =
  | typeof AZURE_SCAN_OPTIONS
  | UnparsedObject;
export const AZURE_SCAN_OPTIONS = "azure_scan_options";
