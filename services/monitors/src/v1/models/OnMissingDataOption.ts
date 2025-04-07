import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls how groups or monitors are treated if an evaluation does not return any data points.
 * The default option results in different behavior depending on the monitor query type.
 * For monitors using Count queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions.
 * For monitors using any query type other than Count, for example Gauge, Measure, or Rate, the monitor shows the last known status.
 * This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.
 */
export type OnMissingDataOption =
  | typeof DEFAULT
  | typeof SHOW_NO_DATA
  | typeof SHOW_AND_NOTIFY_NO_DATA
  | typeof RESOLVE
  | UnparsedObject;
export const DEFAULT = "default";
export const SHOW_NO_DATA = "show_no_data";
export const SHOW_AND_NOTIFY_NO_DATA = "show_and_notify_no_data";
export const RESOLVE = "resolve";
