import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey list request.
 */
export type ProductAnalyticsJourneyListRequestType =
  | typeof JOURNEY_LIST_REQUEST
  | UnparsedObject;
export const JOURNEY_LIST_REQUEST = "journey_list_request";
