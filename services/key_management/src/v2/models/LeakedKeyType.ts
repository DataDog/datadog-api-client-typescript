import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of LeakedKeyType object.
 */
export type LeakedKeyType = typeof LEAKED_KEYS | UnparsedObject;
export const LEAKED_KEYS = "leaked_keys";
