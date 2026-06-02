import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type. The value must be `hardcoded_retention_filters`.
 */
export type RumHardcodedRetentionFilterType =
  | typeof HARDCODED_RETENTION_FILTERS
  | UnparsedObject;
export const HARDCODED_RETENTION_FILTERS = "hardcoded_retention_filters";
