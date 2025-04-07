import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `InputSchemaParametersType` object.
 */
export type InputSchemaParametersType =
  | typeof STRING
  | typeof NUMBER
  | typeof BOOLEAN
  | typeof OBJECT
  | typeof ARRAY_STRING
  | typeof ARRAY_NUMBER
  | typeof ARRAY_BOOLEAN
  | typeof ARRAY_OBJECT
  | UnparsedObject;
export const STRING = "STRING";
export const NUMBER = "NUMBER";
export const BOOLEAN = "BOOLEAN";
export const OBJECT = "OBJECT";
export const ARRAY_STRING = "ARRAY_STRING";
export const ARRAY_NUMBER = "ARRAY_NUMBER";
export const ARRAY_BOOLEAN = "ARRAY_BOOLEAN";
export const ARRAY_OBJECT = "ARRAY_OBJECT";
