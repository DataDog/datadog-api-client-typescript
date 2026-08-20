import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of entity returned by a journey list query.
 */
export type ProductAnalyticsJourneyEntity =
  | typeof SESSION
  | typeof USER
  | typeof ACCOUNT
  | UnparsedObject;
export const SESSION = "session";
export const USER = "user";
export const ACCOUNT = "account";
