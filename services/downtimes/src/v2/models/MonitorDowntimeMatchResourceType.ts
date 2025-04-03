import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor Downtime Match resource type.
 */
export type MonitorDowntimeMatchResourceType =
  | typeof DOWNTIME_MATCH
  | UnparsedObject;
export const DOWNTIME_MATCH = "downtime_match";
