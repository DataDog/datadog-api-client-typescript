import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric bulk configure tags resource.
 */
export type MetricBulkConfigureTagsType =
  | typeof BULK_MANAGE_TAGS
  | UnparsedObject;
export const BULK_MANAGE_TAGS = "metric_bulk_configure_tags";
