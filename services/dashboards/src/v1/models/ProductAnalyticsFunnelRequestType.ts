import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for user journey funnel widget.
 */
export type ProductAnalyticsFunnelRequestType =
  | typeof USER_JOURNEY_FUNNEL
  | UnparsedObject;
export const USER_JOURNEY_FUNNEL = "user_journey_funnel";
