import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Toggles the display of additional content sent in the monitor notification.
 */
export type MonitorOptionsNotificationPresets =
  | typeof SHOW_ALL
  | typeof HIDE_QUERY
  | typeof HIDE_HANDLES
  | typeof HIDE_ALL
  | UnparsedObject;
export const SHOW_ALL = "show_all";
export const HIDE_QUERY = "hide_query";
export const HIDE_HANDLES = "hide_handles";
export const HIDE_ALL = "hide_all";
