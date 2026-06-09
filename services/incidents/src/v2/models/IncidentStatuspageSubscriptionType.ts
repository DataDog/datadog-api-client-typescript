import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Statuspage email subscription resource type.
 */
export type IncidentStatuspageSubscriptionType =
  | typeof STATUSPAGE_EMAIL_SUBSCRIPTION
  | UnparsedObject;
export const STATUSPAGE_EMAIL_SUBSCRIPTION = "statuspage_email_subscription";
