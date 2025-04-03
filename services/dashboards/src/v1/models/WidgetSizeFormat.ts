import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Size of the widget.
 */
export type WidgetSizeFormat =
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | UnparsedObject;
export const SMALL = "small";
export const MEDIUM = "medium";
export const LARGE = "large";
