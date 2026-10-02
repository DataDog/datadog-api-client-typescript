import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for AI Impact user activity entries.
 */
export type AIImpactUserActivityType =
  | typeof AI_IMPACT_USER_ACTIVITY
  | UnparsedObject;
export const AI_IMPACT_USER_ACTIVITY = "ai_impact_user_activity";
