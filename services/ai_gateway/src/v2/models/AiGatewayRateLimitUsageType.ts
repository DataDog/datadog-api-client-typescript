import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway rate limit usage resource type.
 */
export type AiGatewayRateLimitUsageType =
  | typeof RATE_LIMIT_USAGE
  | UnparsedObject;
export const RATE_LIMIT_USAGE = "rate-limit-usage";
