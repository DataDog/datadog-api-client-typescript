import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway rate limit counter resource type.
 */
export type AiGatewayRateLimitInstanceType =
  | typeof RATE_LIMIT_INSTANCES
  | UnparsedObject;
export const RATE_LIMIT_INSTANCES = "rate-limit-instances";
