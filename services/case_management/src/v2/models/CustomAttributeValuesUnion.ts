import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Union of supported value for a custom attribute
 */
export type CustomAttributeValuesUnion =
  | string
  | Array<string>
  | number
  | Array<number>
  | UnparsedObject;
