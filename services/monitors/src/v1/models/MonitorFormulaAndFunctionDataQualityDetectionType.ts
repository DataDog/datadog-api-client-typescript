import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How a `data-jobs alert` job duration monitor detects a breach. Must match the
 * `.detection()` call in the monitor query. Required for job duration monitors.
 */
export type MonitorFormulaAndFunctionDataQualityDetectionType =
  | typeof STATIC
  | typeof ANOMALY
  | UnparsedObject;
export const STATIC = "static";
export const ANOMALY = "anomaly";
