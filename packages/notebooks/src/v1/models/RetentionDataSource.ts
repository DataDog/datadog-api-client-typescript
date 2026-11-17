import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Data source for retention queries.
 */
export type RetentionDataSource =
  | typeof PRODUCT_ANALYTICS_RETENTION
  | UnparsedObject;
export const PRODUCT_ANALYTICS_RETENTION = "product_analytics_retention";
