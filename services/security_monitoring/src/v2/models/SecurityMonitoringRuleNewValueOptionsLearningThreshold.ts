import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A number of occurrences after which signals will be generated for values that weren't learned.
 */
export type SecurityMonitoringRuleNewValueOptionsLearningThreshold =
  | typeof ZERO_OCCURRENCES
  | typeof ONE_OCCURRENCE
  | UnparsedObject;
export const ZERO_OCCURRENCES = 0;
export const ONE_OCCURRENCE = 1;
