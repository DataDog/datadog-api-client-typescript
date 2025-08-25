import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for Spark Pod Autosizing recommendations. Identifies the Recommendation resource returned by SPA.
 */
export type RecommendationType = typeof RECOMMENDATION | UnparsedObject;
export const RECOMMENDATION = "recommendation";
