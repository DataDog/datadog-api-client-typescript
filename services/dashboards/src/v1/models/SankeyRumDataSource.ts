import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Product Analytics or RUM data source type.
 */
export type SankeyRumDataSource =
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
