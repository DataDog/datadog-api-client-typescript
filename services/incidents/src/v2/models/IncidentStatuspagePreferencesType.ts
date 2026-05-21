import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Subscription preferences resource type.
 */
export type IncidentStatuspagePreferencesType =
  | typeof STATUSPAGE_SUBSCRIPTION_PREFERENCES
  | UnparsedObject;
export const STATUSPAGE_SUBSCRIPTION_PREFERENCES =
  "statuspage_subscription_preferences";
