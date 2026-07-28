import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sensitivity level for anomaly detection. Use `never_detect` to disable anomaly detection.
 */
export type TimeseriesWidgetAnomalyDetectionSensitivity =
  | typeof NEVER_DETECT
  | UnparsedObject;
export const NEVER_DETECT = "never_detect";
