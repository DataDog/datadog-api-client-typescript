import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway rate limit resource type.
 */
export type AiGatewayRateLimitType = typeof RATE_LIMITS | UnparsedObject;
export const RATE_LIMITS = "rate-limits";
