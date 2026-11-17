import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a feature suggestions request.
 */
export type ProductAnalyticsFunnelSuggestionsRequestType =
  | typeof FUNNEL_SUGGESTIONS_REQUEST
  | UnparsedObject;
export const FUNNEL_SUGGESTIONS_REQUEST = "funnel_suggestions_request";
