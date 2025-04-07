import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor resource type.
 */
export type DowntimeIncludedMonitorType = typeof MONITORS | UnparsedObject;
export const MONITORS = "monitors";
