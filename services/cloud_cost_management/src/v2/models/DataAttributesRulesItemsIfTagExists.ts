import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The behavior when the tag already exists.
 */
export type DataAttributesRulesItemsIfTagExists =
  | typeof APPEND
  | typeof DO_NOT_APPLY
  | typeof REPLACE
  | UnparsedObject;
export const APPEND = "append";
export const DO_NOT_APPLY = "do_not_apply";
export const REPLACE = "replace";
