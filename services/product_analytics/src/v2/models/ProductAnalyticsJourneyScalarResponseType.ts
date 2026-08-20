import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey scalar response.
 */
export type ProductAnalyticsJourneyScalarResponseType =
  | typeof JOURNEY_SCALAR_RESPONSE
  | UnparsedObject;
export const JOURNEY_SCALAR_RESPONSE = "journey_scalar_response";
