import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The duration in days after which a learned value is forgotten.
 */
export type SecurityMonitoringRuleNewValueOptionsForgetAfter =
  | typeof ONE_DAY
  | typeof TWO_DAYS
  | typeof ONE_WEEK
  | typeof TWO_WEEKS
  | typeof THREE_WEEKS
  | typeof FOUR_WEEKS
  | UnparsedObject;
export const ONE_DAY = 1;
export const TWO_DAYS = 2;
export const ONE_WEEK = 7;
export const TWO_WEEKS = 14;
export const THREE_WEEKS = 21;
export const FOUR_WEEKS = 28;
