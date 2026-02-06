import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Personal access tokens resource type.
 */
export type PersonalAccessTokenType =
  | typeof PERSONAL_ACCESS_TOKENS
  | UnparsedObject;
export const PERSONAL_ACCESS_TOKENS = "personal_access_tokens";
