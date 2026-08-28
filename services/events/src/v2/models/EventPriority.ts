import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The priority of the event alert. Legacy events use `normal` or `low`.
 * Alert events use `1` (highest priority) through `5` (lowest priority).
 */
export type EventPriority =
  | typeof NORMAL
  | typeof LOW
  | typeof PRIORITY_ONE
  | typeof PRIORITY_TWO
  | typeof PRIORITY_THREE
  | typeof PRIORITY_FOUR
  | typeof PRIORITY_FIVE
  | UnparsedObject;
export const NORMAL = "normal";
export const LOW = "low";
export const PRIORITY_ONE = "1";
export const PRIORITY_TWO = "2";
export const PRIORITY_THREE = "3";
export const PRIORITY_FOUR = "4";
export const PRIORITY_FIVE = "5";
