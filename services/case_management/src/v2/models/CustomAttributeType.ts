import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom attributes type
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
