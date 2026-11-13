import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort order for rate limit counters.
 */
export type AiGatewayRateLimitInstanceSort =
  | typeof UTILIZATION_DESC
  | typeof LAST_SEEN_DESC
  | typeof KEY_ASC
  | UnparsedObject;
export const UTILIZATION_DESC = "utilization_desc";
export const LAST_SEEN_DESC = "last_seen_desc";
export const KEY_ASC = "key_asc";
