import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The authentication method type.
 */
export type ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType =
  | typeof BEARER_TOKEN
  | UnparsedObject;
export const BEARER_TOKEN = "bearer_token";
