import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Show the absolute or the relative change.
 */
export type WidgetChangeType =
  | typeof ABSOLUTE
  | typeof RELATIVE
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const RELATIVE = "relative";
