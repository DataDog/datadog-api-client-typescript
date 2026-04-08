import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for scorecard list.
 */
export type ScorecardListType = typeof SCORECARD | UnparsedObject;
export const SCORECARD = "scorecard";
