import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `cloud_prem`.
 */
export type ObservabilityPipelineCloudPremDestinationType =
  | typeof CLOUD_PREM
  | UnparsedObject;
export const CLOUD_PREM = "cloud_prem";
