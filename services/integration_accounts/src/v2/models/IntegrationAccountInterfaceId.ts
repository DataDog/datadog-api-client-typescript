import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported interface (source-type) ids (the `interface_id` path scope).
 */
export type IntegrationAccountInterfaceId =
  | typeof ELASTIC_CLOUD
  | typeof ELASTIC_CLOUD_CCM
  | typeof TWILIO
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
export const ELASTIC_CLOUD_CCM = "elastic-cloud-ccm";
export const TWILIO = "twilio";
