import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Monitor resource type.
 */
export type MetricMonitorType = typeof MONITORS | UnparsedObject;
export const MONITORS = "monitors";
