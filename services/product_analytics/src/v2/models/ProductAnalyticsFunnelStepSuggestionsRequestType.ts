import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a step suggestions request.
 */
export type ProductAnalyticsFunnelStepSuggestionsRequestType =
  | typeof FUNNEL_SUGGESTIONS_STEPS_REQUEST
  | UnparsedObject;
export const FUNNEL_SUGGESTIONS_STEPS_REQUEST =
  "funnel_suggestions_steps_request";
