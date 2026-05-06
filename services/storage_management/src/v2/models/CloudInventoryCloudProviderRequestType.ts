import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Always `cloud_provider`.
 */
export type CloudInventoryCloudProviderRequestType =
  | typeof CLOUD_PROVIDER
  | UnparsedObject;
export const CLOUD_PROVIDER = "cloud_provider";
