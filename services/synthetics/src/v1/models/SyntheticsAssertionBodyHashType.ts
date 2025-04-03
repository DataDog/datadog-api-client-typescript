import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the assertion.
 */
export type SyntheticsAssertionBodyHashType = typeof BODY_HASH | UnparsedObject;
export const BODY_HASH = "bodyHash";
