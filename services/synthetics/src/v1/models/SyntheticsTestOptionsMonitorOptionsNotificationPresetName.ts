import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The name of the preset for the notification for the monitor.
 */
export type SyntheticsTestOptionsMonitorOptionsNotificationPresetName =
  | typeof SHOW_ALL
  | typeof HIDE_ALL
  | typeof HIDE_QUERY
  | typeof HIDE_HANDLES
  | typeof HIDE_QUERY_AND_HANDLES
  | typeof SHOW_ONLY_SNAPSHOT
  | typeof HIDE_HANDLES_AND_FOOTER
  | UnparsedObject;
export const SHOW_ALL = "show_all";
export const HIDE_ALL = "hide_all";
export const HIDE_QUERY = "hide_query";
export const HIDE_HANDLES = "hide_handles";
export const HIDE_QUERY_AND_HANDLES = "hide_query_and_handles";
export const SHOW_ONLY_SNAPSHOT = "show_only_snapshot";
export const HIDE_HANDLES_AND_FOOTER = "hide_handles_and_footer";
