import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom attributes type
 */
export type CustomAttributeType =
  | typeof URL
  | typeof TEXT
  | typeof NUMBER
  | UnparsedObject;
export const URL = "URL";
export const TEXT = "TEXT";
export const NUMBER = "NUMBER";
