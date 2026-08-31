import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API resource type for a usage quota.
 */
export type UsageQuotaType = typeof QUOTAS | UnparsedObject;
export const QUOTAS = "quotas";
