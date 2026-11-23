import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cloud provider for commitment programs.
 */
export type CommitmentsProvider =
  | typeof AWS
  | typeof AZURE
  | typeof GCP
  | UnparsedObject;
export const AWS = "aws";
export const AZURE = "azure";
export const GCP = "gcp";
