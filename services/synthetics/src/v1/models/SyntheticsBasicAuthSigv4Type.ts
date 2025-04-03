import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of authentication to use when performing the test.
 */
export type SyntheticsBasicAuthSigv4Type = typeof SIGV4 | UnparsedObject;
export const SIGV4 = "sigv4";
