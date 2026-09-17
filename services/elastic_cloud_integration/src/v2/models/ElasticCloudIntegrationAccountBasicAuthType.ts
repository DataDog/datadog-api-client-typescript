import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type ElasticCloudIntegrationAccountBasicAuthType =
  | typeof BASIC
  | UnparsedObject;
export const BASIC = "basic";
