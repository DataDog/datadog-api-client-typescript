import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of transform.
 */
export type ArbitraryRuleTagValueTransformType =
  | typeof STRING_REPLACE
  | typeof REGEX_EXTRACT
  | typeof REGEX_REPLACE
  | typeof LOOKUP_MAP
  | UnparsedObject;
export const STRING_REPLACE = "string_replace";
export const REGEX_EXTRACT = "regex_extract";
export const REGEX_REPLACE = "regex_replace";
export const LOOKUP_MAP = "lookup_map";
