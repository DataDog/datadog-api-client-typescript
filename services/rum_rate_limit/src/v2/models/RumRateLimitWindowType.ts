import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The window type over which the session limit is enforced.
 */
export type RumRateLimitWindowType = typeof DAILY | UnparsedObject;
export const DAILY = "daily";
