import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Downtime resource type.
 */
export type DowntimeResourceType = typeof DOWNTIME | UnparsedObject;
export const DOWNTIME = "downtime";
