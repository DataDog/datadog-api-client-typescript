import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for monitor automation settings.
 */
export type MonitorAutomationType = typeof MONITOR_AUTOMATION | UnparsedObject;
export const MONITOR_AUTOMATION = "monitor_automation";
