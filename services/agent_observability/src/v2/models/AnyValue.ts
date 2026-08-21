import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnyValueItem } from "./AnyValueItem";

/**
 * Represents any valid JSON value.
 */
export type AnyValue =
  | string
  | number
  | { [key: string]: any }
  | Array<AnyValueItem>
  | boolean
  | UnparsedObject;
