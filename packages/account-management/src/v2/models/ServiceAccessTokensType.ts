import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Service access tokens resource type.
 */
export type ServiceAccessTokensType =
  | typeof SERVICE_ACCESS_TOKENS
  | UnparsedObject;
export const SERVICE_ACCESS_TOKENS = "service_access_tokens";
