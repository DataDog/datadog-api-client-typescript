import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Color-on-color palette to highlight replaced text.
 */
export type TableWidgetTextFormatPalette =
  | typeof WHITE_ON_RED
  | typeof WHITE_ON_YELLOW
  | typeof WHITE_ON_GREEN
  | typeof BLACK_ON_LIGHT_RED
  | typeof BLACK_ON_LIGHT_YELLOW
  | typeof BLACK_ON_LIGHT_GREEN
  | typeof RED_ON_WHITE
  | typeof YELLOW_ON_WHITE
  | typeof GREEN_ON_WHITE
  | typeof CUSTOM_BG
  | typeof CUSTOM_TEXT
  | UnparsedObject;
export const WHITE_ON_RED = "white_on_red";
export const WHITE_ON_YELLOW = "white_on_yellow";
export const WHITE_ON_GREEN = "white_on_green";
export const BLACK_ON_LIGHT_RED = "black_on_light_red";
export const BLACK_ON_LIGHT_YELLOW = "black_on_light_yellow";
export const BLACK_ON_LIGHT_GREEN = "black_on_light_green";
export const RED_ON_WHITE = "red_on_white";
export const YELLOW_ON_WHITE = "yellow_on_white";
export const GREEN_ON_WHITE = "green_on_white";
export const CUSTOM_BG = "custom_bg";
export const CUSTOM_TEXT = "custom_text";
