import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Learning duration in hours. Anomaly detection waits for at least this amount of historical data before it starts evaluating.
 */
export type SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration =
  | typeof ONE_HOUR
  | typeof SIX_HOURS
  | typeof TWELVE_HOURS
  | typeof ONE_DAY
  | typeof TWO_DAYS
  | typeof ONE_WEEK
  | typeof TWO_WEEKS
  | UnparsedObject;
export const ONE_HOUR = 1;
export const SIX_HOURS = 6;
export const TWELVE_HOURS = 12;
export const ONE_DAY = 24;
export const TWO_DAYS = 48;
export const ONE_WEEK = 168;
export const TWO_WEEKS = 336;
