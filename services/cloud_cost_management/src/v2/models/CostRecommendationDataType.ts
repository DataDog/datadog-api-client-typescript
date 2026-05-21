import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recommendation resource type.
 */
export type CostRecommendationDataType = typeof RECOMMENDATION | UnparsedObject;
export const RECOMMENDATION = "recommendation";
