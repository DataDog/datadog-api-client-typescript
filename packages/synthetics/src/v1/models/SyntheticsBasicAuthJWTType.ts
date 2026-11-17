import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of authentication to use when performing the test.
 */
export type SyntheticsBasicAuthJWTType = typeof JWT | UnparsedObject;
export const JWT = "jwt";
