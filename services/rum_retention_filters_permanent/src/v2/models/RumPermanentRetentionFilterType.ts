import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type. The value must be `permanent_retention_filters`.
 */
export type RumPermanentRetentionFilterType =
  | typeof PERMANENT_RETENTION_FILTERS
  | UnparsedObject;
export const PERMANENT_RETENTION_FILTERS = "permanent_retention_filters";
