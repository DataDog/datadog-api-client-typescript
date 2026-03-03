import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status page email subscription resource type.
 */
export type StatusPageEmailSubscriptionType =
  | typeof EMAIL_SUBSCRIPTIONS
  | UnparsedObject;
export const EMAIL_SUBSCRIPTIONS = "email_subscriptions";
