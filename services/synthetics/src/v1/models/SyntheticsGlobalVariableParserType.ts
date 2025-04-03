import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of parser for a Synthetic global variable from a synthetics test.
 */
export type SyntheticsGlobalVariableParserType =
  | typeof RAW
  | typeof JSON_PATH
  | typeof REGEX
  | typeof X_PATH
  | UnparsedObject;
export const RAW = "raw";
export const JSON_PATH = "json_path";
export const REGEX = "regex";
export const X_PATH = "x_path";
