import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a calendar-aligned retention interval.
 */
export type ProductAnalyticsRetentionCalendarTimeIntervalType =
  | typeof CALENDAR
  | UnparsedObject;
export const CALENDAR = "calendar";
