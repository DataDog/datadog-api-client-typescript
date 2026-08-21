import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action to take when the session quota is reached.
 */
export type RumRetentionQuotaReachedAction =
  | typeof STOP
  | typeof SLOWDOWN
  | UnparsedObject;
export const STOP = "stop";
export const SLOWDOWN = "slowdown";
