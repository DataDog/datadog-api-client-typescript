import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of Google Cloud Usage Cost config patch request.
 */
export type GCPUsageCostConfigPatchRequestType =
  | typeof GCP_USAGE_COST_CONFIG_PATCH_REQUEST
  | UnparsedObject;
export const GCP_USAGE_COST_CONFIG_PATCH_REQUEST =
  "gcp_uc_config_patch_request";
