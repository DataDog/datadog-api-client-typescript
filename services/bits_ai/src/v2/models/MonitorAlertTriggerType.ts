import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of monitor alert trigger.
 */
export type MonitorAlertTriggerType =
  | typeof MONITOR_ALERT_TRIGGER
  | UnparsedObject;
export const MONITOR_ALERT_TRIGGER = "monitor_alert_trigger";
