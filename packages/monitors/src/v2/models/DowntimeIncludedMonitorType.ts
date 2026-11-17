import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Monitor resource type.
 */
export type DowntimeIncludedMonitorType = typeof MONITORS | UnparsedObject;
export const MONITORS = "monitors";
