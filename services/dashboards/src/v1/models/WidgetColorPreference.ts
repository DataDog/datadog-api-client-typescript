import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which color to use on the widget.
 */
export type WidgetColorPreference =
  | typeof BACKGROUND
  | typeof TEXT
  | UnparsedObject;
export const BACKGROUND = "background";
export const TEXT = "text";
