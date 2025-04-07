import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of basic authentication to use when performing the test.
 */
export type SyntheticsBasicAuthOauthROPType = typeof OAUTH_ROP | UnparsedObject;
export const OAUTH_ROP = "oauth-rop";
