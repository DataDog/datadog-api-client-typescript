import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The name of the preset for the notification for the monitor.
 */
export type SyntheticsTestOptionsMonitorOptionsNotificationPresetName =
  | typeof SHOW_ALL
  | typeof HIDE_ALL
  | typeof HIDE_QUERY
  | typeof HIDE_HANDLES
  | UnparsedObject;
export const SHOW_ALL = "show_all";
export const HIDE_ALL = "hide_all";
export const HIDE_QUERY = "hide_query";
export const HIDE_HANDLES = "hide_handles";
