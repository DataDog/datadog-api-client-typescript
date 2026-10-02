import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for the SPA v2 recommendation request.
 */
export type RecommendationV2RequestType =
  | typeof RECOMMENDATION_V2_REQUEST
  | UnparsedObject;
export const RECOMMENDATION_V2_REQUEST = "recommendation_v2_request";
