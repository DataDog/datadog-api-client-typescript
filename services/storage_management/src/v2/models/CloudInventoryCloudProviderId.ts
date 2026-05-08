import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cloud provider for this sync configuration (`aws`, `gcp`, or `azure`). For requests, must match the provider block supplied under `attributes`.
 */
export type CloudInventoryCloudProviderId =
  | typeof AWS
  | typeof GCP
  | typeof AZURE
  | UnparsedObject;
export const AWS = "aws";
export const GCP = "gcp";
export const AZURE = "azure";
