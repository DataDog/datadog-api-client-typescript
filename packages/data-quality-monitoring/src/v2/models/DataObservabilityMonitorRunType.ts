import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API resource type for a data observability monitor run.
 */
export type DataObservabilityMonitorRunType =
  | typeof MONITOR_RUN
  | UnparsedObject;
export const MONITOR_RUN = "monitor_run";
