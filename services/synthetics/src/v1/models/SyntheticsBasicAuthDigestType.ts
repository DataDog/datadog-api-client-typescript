import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of basic authentication to use when performing the test.
 */
export type SyntheticsBasicAuthDigestType = typeof DIGEST | UnparsedObject;
export const DIGEST = "digest";
