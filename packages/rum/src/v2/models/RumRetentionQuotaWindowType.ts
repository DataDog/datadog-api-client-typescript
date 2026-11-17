import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The window type over which the session limit is enforced.
 */
export type RumRetentionQuotaWindowType = typeof DAILY | UnparsedObject;
export const DAILY = "daily";
