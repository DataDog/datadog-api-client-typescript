import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sankey widget with RUM data source.
 */
export type SankeyRumDataSource =
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
