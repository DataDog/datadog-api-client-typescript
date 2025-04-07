import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Match or compare option.
 */
export type TableWidgetTextFormatMatchType =
  | typeof IS
  | typeof IS_NOT
  | typeof CONTAINS
  | typeof DOES_NOT_CONTAIN
  | typeof STARTS_WITH
  | typeof ENDS_WITH
  | UnparsedObject;
export const IS = "is";
export const IS_NOT = "is_not";
export const CONTAINS = "contains";
export const DOES_NOT_CONTAIN = "does_not_contain";
export const STARTS_WITH = "starts_with";
export const ENDS_WITH = "ends_with";
