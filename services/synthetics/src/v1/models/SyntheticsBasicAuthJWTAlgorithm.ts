import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Algorithm to use for the JWT authentication.
 */
export type SyntheticsBasicAuthJWTAlgorithm =
  | typeof HS256
  | typeof RS256
  | typeof ES256
  | UnparsedObject;
export const HS256 = "HS256";
export const RS256 = "RS256";
export const ES256 = "ES256";
