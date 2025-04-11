import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Defines the end day of the restriction within a Layer.
 */
export type LayerAttributesRestrictionsItemsEndDay =
  | typeof MONDAY
  | typeof TUESDAY
  | typeof WEDNESDAY
  | typeof THURSDAY
  | typeof FRIDAY
  | typeof SATURDAY
  | typeof SUNDAY
  | UnparsedObject;
export const MONDAY = "monday";
export const TUESDAY = "tuesday";
export const WEDNESDAY = "wednesday";
export const THURSDAY = "thursday";
export const FRIDAY = "friday";
export const SATURDAY = "saturday";
export const SUNDAY = "sunday";
