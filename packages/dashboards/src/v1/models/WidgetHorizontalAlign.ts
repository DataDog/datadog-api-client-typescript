import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Horizontal alignment.
 */
export type WidgetHorizontalAlign =
  | typeof CENTER
  | typeof LEFT
  | typeof RIGHT
  | UnparsedObject;
export const CENTER = "center";
export const LEFT = "left";
export const RIGHT = "right";
