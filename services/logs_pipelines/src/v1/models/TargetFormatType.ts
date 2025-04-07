import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type.
 * If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types.
 * If the `target_type` is `tag`, this parameter may not be specified.
 */
export type TargetFormatType =
  | typeof AUTO
  | typeof STRING
  | typeof INTEGER
  | typeof DOUBLE
  | UnparsedObject;
export const AUTO = "auto";
export const STRING = "string";
export const INTEGER = "integer";
export const DOUBLE = "double";
