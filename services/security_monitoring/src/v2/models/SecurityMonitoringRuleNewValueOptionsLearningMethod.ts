import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The learning method used to determine when signals should be generated for values that weren't learned.
 */
export type SecurityMonitoringRuleNewValueOptionsLearningMethod =
  | typeof DURATION
  | typeof THRESHOLD
  | UnparsedObject;
export const DURATION = "duration";
export const THRESHOLD = "threshold";
