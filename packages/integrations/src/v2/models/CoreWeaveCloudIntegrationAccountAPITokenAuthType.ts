import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The authentication method type.
 */
export type CoreWeaveCloudIntegrationAccountAPITokenAuthType =
  | typeof COREWEAVE_API_TOKEN
  | UnparsedObject;
export const COREWEAVE_API_TOKEN = "coreweave_api_token";
