import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The retention metric to compute, either an absolute count or a rate.
 */
export type ProductAnalyticsRetentionComputeMetric =
  | typeof RETENTION
  | typeof RETENTION_RATE
  | UnparsedObject;
export const RETENTION = "__dd.retention";
export const RETENTION_RATE = "__dd.retention_rate";
