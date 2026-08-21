import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey list response.
 */
export type ProductAnalyticsJourneyListResponseType =
  | typeof JOURNEY_LIST_RESPONSE
  | UnparsedObject;
export const JOURNEY_LIST_RESPONSE = "journey_list_response";
