import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Calendar-aligned time span type.
 */
export type WidgetCalendarAlignedSpanType =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | typeof YEARLY
  | UnparsedObject;
export const DAILY = "daily";
export const WEEKLY = "weekly";
export const MONTHLY = "monthly";
export const YEARLY = "yearly";
