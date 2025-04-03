import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Color palette to apply.
 */
export type WidgetPalette =
  | typeof BLUE
  | typeof CUSTOM_BACKGROUND
  | typeof CUSTOM_IMAGE
  | typeof CUSTOM_TEXT
  | typeof GRAY_ON_WHITE
  | typeof GREY
  | typeof GREEN
  | typeof ORANGE
  | typeof RED
  | typeof RED_ON_WHITE
  | typeof WHITE_ON_GRAY
  | typeof WHITE_ON_GREEN
  | typeof GREEN_ON_WHITE
  | typeof WHITE_ON_RED
  | typeof WHITE_ON_YELLOW
  | typeof YELLOW_ON_WHITE
  | typeof BLACK_ON_LIGHT_YELLOW
  | typeof BLACK_ON_LIGHT_GREEN
  | typeof BLACK_ON_LIGHT_RED
  | UnparsedObject;
export const BLUE = "blue";
export const CUSTOM_BACKGROUND = "custom_bg";
export const CUSTOM_IMAGE = "custom_image";
export const CUSTOM_TEXT = "custom_text";
export const GRAY_ON_WHITE = "gray_on_white";
export const GREY = "grey";
export const GREEN = "green";
export const ORANGE = "orange";
export const RED = "red";
export const RED_ON_WHITE = "red_on_white";
export const WHITE_ON_GRAY = "white_on_gray";
export const WHITE_ON_GREEN = "white_on_green";
export const GREEN_ON_WHITE = "green_on_white";
export const WHITE_ON_RED = "white_on_red";
export const WHITE_ON_YELLOW = "white_on_yellow";
export const YELLOW_ON_WHITE = "yellow_on_white";
export const BLACK_ON_LIGHT_YELLOW = "black_on_light_yellow";
export const BLACK_ON_LIGHT_GREEN = "black_on_light_green";
export const BLACK_ON_LIGHT_RED = "black_on_light_red";
