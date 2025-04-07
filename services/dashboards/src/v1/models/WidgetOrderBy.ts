import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * What to order by.
 */
export type WidgetOrderBy =
  | typeof CHANGE
  | typeof NAME
  | typeof PRESENT
  | typeof PAST
  | UnparsedObject;
export const CHANGE = "change";
export const NAME = "name";
export const PRESENT = "present";
export const PAST = "past";
