import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway rate limit counter summary resource type.
 */
export type AiGatewayRateLimitInstancesSummaryType =
  | typeof RATE_LIMIT_INSTANCES_SUMMARY
  | UnparsedObject;
export const RATE_LIMIT_INSTANCES_SUMMARY = "rate-limit-instances-summary";
