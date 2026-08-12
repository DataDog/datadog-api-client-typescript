import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Authentication method discriminator.
 */
export type ElasticCloudBasicAuthType = typeof BASIC | UnparsedObject;
export const BASIC = "basic";
