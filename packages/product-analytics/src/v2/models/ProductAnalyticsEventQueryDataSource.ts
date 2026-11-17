import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The data source identifier.
 */
export type ProductAnalyticsEventQueryDataSource =
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const PRODUCT_ANALYTICS = "product_analytics";
