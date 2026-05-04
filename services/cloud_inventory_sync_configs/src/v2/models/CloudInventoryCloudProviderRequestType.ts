import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for upsert sync configuration requests.
 */
export type CloudInventoryCloudProviderRequestType =
  | typeof CLOUD_PROVIDER
  | UnparsedObject;
export const CLOUD_PROVIDER = "cloud_provider";
