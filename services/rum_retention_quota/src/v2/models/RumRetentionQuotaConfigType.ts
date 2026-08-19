import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource, always `rum_quota_config`.
 */
export type RumRetentionQuotaConfigType =
  | typeof RUM_QUOTA_CONFIG
  | UnparsedObject;
export const RUM_QUOTA_CONFIG = "rum_quota_config";
