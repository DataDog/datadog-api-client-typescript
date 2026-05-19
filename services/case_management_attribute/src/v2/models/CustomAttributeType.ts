import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The data type of the custom attribute, which determines the allowed values and UI input control.
 */
export type CustomAttributeType =
  | typeof URL
  | typeof TEXT
  | typeof NUMBER
  | typeof SELECT
  | UnparsedObject;
export const URL = "URL";
export const TEXT = "TEXT";
export const NUMBER = "NUMBER";
export const SELECT = "SELECT";
