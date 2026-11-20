import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The product whose events the retention filter applies to.
 */
export type RUMRetentionFilterTrack =
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
