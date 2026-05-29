import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Service access tokens resource type.
 */
export type ServiceAccessTokensType =
  | typeof SERVICE_ACCESS_TOKENS
  | UnparsedObject;
export const SERVICE_ACCESS_TOKENS = "service_access_tokens";
