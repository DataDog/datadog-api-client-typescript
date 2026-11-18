import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a feature suggestions response.
 */
export type ProductAnalyticsFunnelSuggestionsResponseType =
  | typeof FUNNEL_SUGGESTIONS_RESPONSE
  | UnparsedObject;
export const FUNNEL_SUGGESTIONS_RESPONSE = "funnel_suggestions_response";
