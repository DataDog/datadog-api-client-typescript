import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of account.
 */
export type GCPServiceAccountType = typeof GCP_SERVICE_ACCOUNT | UnparsedObject;
export const GCP_SERVICE_ACCOUNT = "gcp_service_account";
