import { UnparsedObject } from "@datadog/datadog-api-client";

export type AnyValueItem =
  | string
  | number
  | { [key: string]: any }
  | boolean
  | UnparsedObject;
