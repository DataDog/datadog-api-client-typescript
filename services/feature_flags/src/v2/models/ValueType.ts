import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of values for the feature flag variants.
 */
export type ValueType =
  | typeof BOOLEAN
  | typeof INTEGER
  | typeof NUMERIC
  | typeof STRING
  | typeof JSON
  | UnparsedObject;
export const BOOLEAN = "BOOLEAN";
export const INTEGER = "INTEGER";
export const NUMERIC = "NUMERIC";
export const STRING = "STRING";
export const JSON = "JSON";
