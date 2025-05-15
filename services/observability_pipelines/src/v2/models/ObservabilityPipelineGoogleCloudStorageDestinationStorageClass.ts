import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Storage class used for objects stored in GCS.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationStorageClass =
  | typeof STANDARD
  | typeof NEARLINE
  | typeof COLDLINE
  | typeof ARCHIVE
  | UnparsedObject;
export const STANDARD = "STANDARD";
export const NEARLINE = "NEARLINE";
export const COLDLINE = "COLDLINE";
export const ARCHIVE = "ARCHIVE";
