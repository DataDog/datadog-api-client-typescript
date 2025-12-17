import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * An optional parameter that sets how permissive anomaly detection is.
 * Higher values require higher deviations before triggering a signal.
 */
export type SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance =
  | typeof ONE
  | typeof TWO
  | typeof THREE
  | typeof FOUR
  | typeof FIVE
  | UnparsedObject;
export const ONE = 1;
export const TWO = 2;
export const THREE = 3;
export const FOUR = 4;
export const FIVE = 5;
