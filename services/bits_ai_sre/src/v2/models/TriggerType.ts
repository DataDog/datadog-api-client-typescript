import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of trigger for the investigation.
 */
export type TriggerType = typeof MONITOR_ALERT_TRIGGER | UnparsedObject;
export const MONITOR_ALERT_TRIGGER = "monitor_alert_trigger";
