import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Metric for retention compute.
 */
export type RetentionComputeMetric =
  | typeof RETENTION
  | typeof RETENTION_RATE
  | UnparsedObject;
export const RETENTION = "__dd.retention";
export const RETENTION_RATE = "__dd.retention_rate";
