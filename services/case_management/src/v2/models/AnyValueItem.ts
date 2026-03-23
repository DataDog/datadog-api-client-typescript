import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A single item in an array of arbitrary values, which can be a string, number, object, or boolean.
 */
export type AnyValueItem =
  | string
  | number
  | { [key: string]: any }
  | boolean
  | UnparsedObject;
