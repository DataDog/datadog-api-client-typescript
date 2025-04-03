import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of account.
 */
export type GCPSTSDelegateAccountType =
  | typeof GCP_STS_DELEGATE
  | UnparsedObject;
export const GCP_STS_DELEGATE = "gcp_sts_delegate";
