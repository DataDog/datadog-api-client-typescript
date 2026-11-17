import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type for scorecard.
 */
export type ScorecardType = typeof SCORECARD | UnparsedObject;
export const SCORECARD = "scorecard";
