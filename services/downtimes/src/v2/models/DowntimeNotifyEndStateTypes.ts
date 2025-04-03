import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * State that will trigger a monitor notification when the `notify_end_types` action occurs.
 */
export type DowntimeNotifyEndStateTypes =
  | typeof ALERT
  | typeof NO_DATA
  | typeof WARN
  | UnparsedObject;
export const ALERT = "alert";
export const NO_DATA = "no data";
export const WARN = "warn";
