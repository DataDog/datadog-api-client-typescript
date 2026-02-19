import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for scores.
 */
export type ScoreType = typeof SCORE | UnparsedObject;
export const SCORE = "score";
