import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of scope the rate limit configuration applies to.
 */
export type RumRateLimitScopeType = typeof APPLICATION | UnparsedObject;
export const APPLICATION = "application";
