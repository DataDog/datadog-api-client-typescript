import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The duration in days during which values are learned, and after which signals will be generated for values that
 * weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned.
 */
export type SecurityMonitoringRuleNewValueOptionsLearningDuration =
  | typeof ZERO_DAYS
  | typeof ONE_DAY
  | typeof SEVEN_DAYS
  | UnparsedObject;
export const ZERO_DAYS = 0;
export const ONE_DAY = 1;
export const SEVEN_DAYS = 7;
