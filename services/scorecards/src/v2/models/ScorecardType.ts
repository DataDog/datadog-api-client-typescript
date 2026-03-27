import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for scorecard.
 */
export type ScorecardType = typeof SCORECARD | UnparsedObject;
export const SCORECARD = "scorecard";
