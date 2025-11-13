import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates the type of asset this entity represents on a monitor.
 */
export type MonitorAssetCategory =
  | typeof DASHBOARD
  | typeof WORKFLOW
  | typeof RUNBOOK
  | UnparsedObject;
export const DASHBOARD = "dashboard";
export const WORKFLOW = "workflow";
export const RUNBOOK = "runbook";
