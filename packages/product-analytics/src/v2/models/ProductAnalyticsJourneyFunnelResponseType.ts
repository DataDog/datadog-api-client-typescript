import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for a journey funnel response.
 */
export type ProductAnalyticsJourneyFunnelResponseType =
  | typeof FUNNEL_RESPONSE
  | UnparsedObject;
export const FUNNEL_RESPONSE = "funnel_response";
