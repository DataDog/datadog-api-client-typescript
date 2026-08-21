import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a target selected by aggregation.
 */
export type ProductAnalyticsRetentionAggregationTargetType =
  | typeof AGGREGATION
  | UnparsedObject;
export const AGGREGATION = "aggregation";
