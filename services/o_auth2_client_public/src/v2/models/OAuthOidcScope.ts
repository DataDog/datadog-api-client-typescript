import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OIDC scope a client may be restricted to.
 */
export type OAuthOidcScope =
  | typeof OPENID
  | typeof PROFILE
  | typeof EMAIL
  | typeof OFFLINE_ACCESS
  | UnparsedObject;
export const OPENID = "openid";
export const PROFILE = "profile";
export const EMAIL = "email";
export const OFFLINE_ACCESS = "offline_access";
