import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of match pattern, either a literal string or a regex.
 */
export type RUMSdkConfigMatchOptionSerializedType =
  | typeof STRING
  | typeof REGEX
  | UnparsedObject;
export const STRING = "string";
export const REGEX = "regex";
