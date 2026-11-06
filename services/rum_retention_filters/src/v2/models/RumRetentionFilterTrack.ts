import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The product track a RUM retention filter applies to.
 */
export type RumRetentionFilterTrack =
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
