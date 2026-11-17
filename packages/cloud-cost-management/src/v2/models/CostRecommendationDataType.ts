import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Recommendation resource type.
 */
export type CostRecommendationDataType = typeof RECOMMENDATION | UnparsedObject;
export const RECOMMENDATION = "recommendation";
