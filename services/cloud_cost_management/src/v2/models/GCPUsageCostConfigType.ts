import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of GCP Usage Cost config.
 */
export type GCPUsageCostConfigType = typeof GCP_UC_CONFIG | UnparsedObject;
export const GCP_UC_CONFIG = "gcp_uc_config";
