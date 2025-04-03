import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be retention_filters.
 */
export type RumRetentionFilterType = typeof RETENTION_FILTERS | UnparsedObject;
export const RETENTION_FILTERS = "retention_filters";
