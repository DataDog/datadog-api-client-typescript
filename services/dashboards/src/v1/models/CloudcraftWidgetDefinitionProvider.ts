import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cloud provider for the Cloudcraft widget.
 */
export type CloudcraftWidgetDefinitionProvider =
  | typeof AWS
  | typeof AZURE
  | typeof GCP
  | typeof NDM
  | typeof OCI
  | UnparsedObject;
export const AWS = "aws";
export const AZURE = "azure";
export const GCP = "gcp";
export const NDM = "ndm";
export const OCI = "oci";
