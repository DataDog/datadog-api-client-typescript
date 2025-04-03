import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Vertical alignment.
 */
export type WidgetVerticalAlign =
  | typeof CENTER
  | typeof TOP
  | typeof BOTTOM
  | UnparsedObject;
export const CENTER = "center";
export const TOP = "top";
export const BOTTOM = "bottom";
