import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a Synthetics downtime.
 */
export type SyntheticsDowntimeResourceType = typeof DOWNTIME | UnparsedObject;
export const DOWNTIME = "downtime";
