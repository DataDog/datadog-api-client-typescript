import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Size of the margins around the image.
 * **Note**: `small` and `large` values are deprecated.
 */
export type WidgetMargin =
  | typeof SM
  | typeof MD
  | typeof LG
  | typeof SMALL
  | typeof LARGE
  | UnparsedObject;
export const SM = "sm";
export const MD = "md";
export const LG = "lg";
export const SMALL = "small";
export const LARGE = "large";
