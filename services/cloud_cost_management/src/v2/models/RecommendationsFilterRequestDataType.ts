import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Legacy JSON:API resource type required by the cost recommendations search decoder.
 */
export type RecommendationsFilterRequestDataType =
  | typeof RECOMMENDATIONS_FILTER
  | UnparsedObject;
export const RECOMMENDATIONS_FILTER = "recommendations_filter";
