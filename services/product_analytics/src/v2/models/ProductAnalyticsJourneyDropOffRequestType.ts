import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey drop-off analysis request.
 */
export type ProductAnalyticsJourneyDropOffRequestType =
  | typeof JOURNEY_DROP_OFF_ANALYSIS_REQUEST
  | UnparsedObject;
export const JOURNEY_DROP_OFF_ANALYSIS_REQUEST =
  "journey_drop_off_analysis_request";
