import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey funnel request.
 */
export type ProductAnalyticsJourneyRequestType =
  | typeof JOURNEY_REQUEST
  | UnparsedObject;
export const JOURNEY_REQUEST = "journey_request";
