import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Gcp scan options resource type.
 */
export type GcpScanOptionsInputUpdateDataType =
  | typeof GCP_SCAN_OPTIONS
  | UnparsedObject;
export const GCP_SCAN_OPTIONS = "gcp_scan_options";
