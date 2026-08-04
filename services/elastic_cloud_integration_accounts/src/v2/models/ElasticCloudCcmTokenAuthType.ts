import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Authentication method discriminator.
 */
export type ElasticCloudCcmTokenAuthType = typeof BEARER_TOKEN | UnparsedObject;
export const BEARER_TOKEN = "bearer_token";
