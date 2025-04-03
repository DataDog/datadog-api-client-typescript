import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the dashboard.
 */
export type DashboardType =
  | typeof CUSTOM_TIMEBOARD
  | typeof CUSTOM_SCREENBOARD
  | typeof INTEGRATION_SCREENBOARD
  | typeof INTEGRATION_TIMEBOARD
  | typeof HOST_TIMEBOARD
  | UnparsedObject;
export const CUSTOM_TIMEBOARD = "custom_timeboard";
export const CUSTOM_SCREENBOARD = "custom_screenboard";
export const INTEGRATION_SCREENBOARD = "integration_screenboard";
export const INTEGRATION_TIMEBOARD = "integration_timeboard";
export const HOST_TIMEBOARD = "host_timeboard";
