import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How often the digest is sent. `weekly` and `biweekly` use `weekly_execution_day` and `weekly_execution_time`;
 * `every_30` and `every_90` (days) use `interval_execution_date` and `interval_execution_time`.
 */
export type CostRecommendationNotificationRuleFrequency =
  | typeof WEEKLY
  | typeof BIWEEKLY
  | typeof EVERY_30
  | typeof EVERY_90
  | UnparsedObject;
export const WEEKLY = "weekly";
export const BIWEEKLY = "biweekly";
export const EVERY_30 = "every_30";
export const EVERY_90 = "every_90";
