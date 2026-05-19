import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The value of a custom attribute. The accepted format depends on the attribute's type and whether it accepts multiple values.
 */
export type CustomAttributeValuesUnion =
  | string
  | Array<string>
  | number
  | Array<number>
  | UnparsedObject;
