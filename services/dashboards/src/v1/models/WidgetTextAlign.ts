import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How to align the text on the widget.
 */
export type WidgetTextAlign =
  | typeof CENTER
  | typeof LEFT
  | typeof RIGHT
  | UnparsedObject;
export const CENTER = "center";
export const LEFT = "left";
export const RIGHT = "right";
