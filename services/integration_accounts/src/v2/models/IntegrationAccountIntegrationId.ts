import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported integration ids (the `integration_id` path scope).
 */
export type IntegrationAccountIntegrationId =
  | typeof ELASTIC_CLOUD
  | typeof TWILIO
  | UnparsedObject;
export const ELASTIC_CLOUD = "elastic-cloud";
export const TWILIO = "twilio";
