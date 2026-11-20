import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ProductAnalyticsJourneyDatasetEntity =
  | typeof SESSION
  | typeof USER
  | typeof ACCOUNT
  | UnparsedObject;
export const SESSION = "session";
export const USER = "user";
export const ACCOUNT = "account";
