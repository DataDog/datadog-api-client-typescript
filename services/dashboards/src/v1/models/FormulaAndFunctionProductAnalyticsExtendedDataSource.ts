import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for Product Analytics Extended queries.
 */
export type FormulaAndFunctionProductAnalyticsExtendedDataSource =
  | typeof PRODUCT_ANALYTICS_EXTENDED
  | UnparsedObject;
export const PRODUCT_ANALYTICS_EXTENDED = "product_analytics_extended";
