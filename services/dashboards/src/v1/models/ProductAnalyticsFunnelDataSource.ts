import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for user journey funnel queries.
 */
export type ProductAnalyticsFunnelDataSource =
  | typeof PRODUCT_ANALYTICS_JOURNEY
  | UnparsedObject;
export const PRODUCT_ANALYTICS_JOURNEY = "product_analytics_journey";
