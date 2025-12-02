import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates the type of asset this entity represents on a monitor.
 */
export type MonitorAssetCategory = typeof RUNBOOK | UnparsedObject;
export const RUNBOOK = "runbook";
