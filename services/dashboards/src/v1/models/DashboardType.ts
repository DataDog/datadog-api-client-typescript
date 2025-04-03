import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the associated private dashboard.
 */
export type DashboardType =
  | typeof CUSTOM_TIMEBOARD
  | typeof CUSTOM_SCREENBOARD
  | UnparsedObject;
export const CUSTOM_TIMEBOARD = "custom_timeboard";
export const CUSTOM_SCREENBOARD = "custom_screenboard";
