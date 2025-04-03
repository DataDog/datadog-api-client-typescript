import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Define how you want to align the text on the widget.
 */
export type WidgetTickEdge =
  | typeof BOTTOM
  | typeof LEFT
  | typeof RIGHT
  | typeof TOP
  | UnparsedObject;
export const BOTTOM = "bottom";
export const LEFT = "left";
export const RIGHT = "right";
export const TOP = "top";
