import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource, always `rum_rate_limit_config`.
 */
export type RumRateLimitConfigType =
  | typeof RUM_RATE_LIMIT_CONFIG
  | UnparsedObject;
export const RUM_RATE_LIMIT_CONFIG = "rum_rate_limit_config";
