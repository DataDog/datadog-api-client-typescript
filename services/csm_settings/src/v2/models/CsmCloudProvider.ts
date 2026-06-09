import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The cloud provider of a host resource.
 */
export type CsmCloudProvider =
  | typeof AWS
  | typeof GCP
  | typeof AZURE
  | typeof OCI
  | UnparsedObject;
export const AWS = "aws";
export const GCP = "gcp";
export const AZURE = "azure";
export const OCI = "oci";
