import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of GCP Usage Cost config post request.
 */
export type GCPUsageCostConfigPostRequestType =
  | typeof GCP_USAGE_COST_CONFIG_POST_REQUEST
  | UnparsedObject;
export const GCP_USAGE_COST_CONFIG_POST_REQUEST = "gcp_uc_config_post_request";
