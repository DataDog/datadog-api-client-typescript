import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API resource type.
 */
export type ScorecardScoreDataType = typeof SCORE | UnparsedObject;
export const SCORE = "score";
