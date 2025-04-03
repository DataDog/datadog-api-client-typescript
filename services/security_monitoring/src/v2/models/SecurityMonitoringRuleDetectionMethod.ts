import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The detection method.
 */
export type SecurityMonitoringRuleDetectionMethod =
  | typeof THRESHOLD
  | typeof NEW_VALUE
  | typeof ANOMALY_DETECTION
  | typeof IMPOSSIBLE_TRAVEL
  | typeof HARDCODED
  | typeof THIRD_PARTY
  | typeof ANOMALY_THRESHOLD
  | UnparsedObject;
export const THRESHOLD = "threshold";
export const NEW_VALUE = "new_value";
export const ANOMALY_DETECTION = "anomaly_detection";
export const IMPOSSIBLE_TRAVEL = "impossible_travel";
export const HARDCODED = "hardcoded";
export const THIRD_PARTY = "third_party";
export const ANOMALY_THRESHOLD = "anomaly_threshold";
