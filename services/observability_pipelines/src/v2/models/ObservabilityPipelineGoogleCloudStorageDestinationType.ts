import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `google_cloud_storage`.
 */
export type ObservabilityPipelineGoogleCloudStorageDestinationType =
  | typeof GOOGLE_CLOUD_STORAGE
  | UnparsedObject;
export const GOOGLE_CLOUD_STORAGE = "google_cloud_storage";
