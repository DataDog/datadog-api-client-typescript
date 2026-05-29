import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type returned by the access tokens list endpoint. Includes both personal and service access tokens.
 */
export type AccessTokensType =
  | typeof PERSONAL_ACCESS_TOKENS
  | typeof SERVICE_ACCESS_TOKENS
  | UnparsedObject;
export const PERSONAL_ACCESS_TOKENS = "personal_access_tokens";
export const SERVICE_ACCESS_TOKENS = "service_access_tokens";
