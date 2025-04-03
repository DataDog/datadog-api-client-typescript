import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor resource type.
 */
export type MetricMonitorType = typeof MONITORS | UnparsedObject;
export const MONITORS = "monitors";
