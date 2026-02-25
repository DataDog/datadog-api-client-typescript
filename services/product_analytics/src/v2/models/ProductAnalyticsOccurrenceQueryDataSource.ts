import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The data source identifier for occurrence queries.
 */
export type ProductAnalyticsOccurrenceQueryDataSource =
  | typeof PRODUCT_ANALYTICS_OCCURRENCE
  | UnparsedObject;
export const PRODUCT_ANALYTICS_OCCURRENCE = "product_analytics_occurrence";
