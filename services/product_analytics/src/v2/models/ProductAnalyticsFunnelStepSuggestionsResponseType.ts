import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a step suggestions response.
 */
export type ProductAnalyticsFunnelStepSuggestionsResponseType =
  | typeof FUNNEL_SUGGESTIONS_STEPS_RESPONSE
  | UnparsedObject;
export const FUNNEL_SUGGESTIONS_STEPS_RESPONSE =
  "funnel_suggestions_steps_response";
