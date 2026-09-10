import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Value of the app input. This can be a string, number, boolean, object, or a non-empty homogeneous array of those types.
 */
export type EmbeddedAppWidgetInputValue =
  | string
  | number
  | boolean
  | { [key: string]: any }
  | Array<string>
  | Array<number>
  | Array<boolean>
  | Array<{ [key: string]: any }>
  | UnparsedObject;
