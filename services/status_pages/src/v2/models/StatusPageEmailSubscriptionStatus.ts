import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of the email subscription.
 */
export type StatusPageEmailSubscriptionStatus =
  | typeof ACTIVE
  | typeof UNCONFIRMED
  | UnparsedObject;
export const ACTIVE = "active";
export const UNCONFIRMED = "unconfirmed";
