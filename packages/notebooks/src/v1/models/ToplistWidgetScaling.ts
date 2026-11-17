import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Top list widget scaling definition.
 */
export type ToplistWidgetScaling =
  | typeof ABSOLUTE
  | typeof RELATIVE
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const RELATIVE = "relative";
