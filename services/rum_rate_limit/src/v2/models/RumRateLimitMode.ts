import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rate limit mode. `custom` enforces a fixed session limit, while
 * `adaptive` dynamically adjusts retention.
 */
export type RumRateLimitMode = typeof CUSTOM | typeof ADAPTIVE | UnparsedObject;
export const CUSTOM = "custom";
export const ADAPTIVE = "adaptive";
