import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API resource type.
 */
export type ScorecardScoreDataType = typeof SCORE | UnparsedObject;
export const SCORE = "score";
