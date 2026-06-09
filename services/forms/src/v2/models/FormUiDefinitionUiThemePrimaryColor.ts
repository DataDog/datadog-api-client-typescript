import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The primary color of the form theme.
 */
export type FormUiDefinitionUiThemePrimaryColor =
  | typeof GRAY
  | typeof RED
  | typeof ORANGE
  | typeof YELLOW
  | typeof GREEN
  | typeof LIGHT_BLUE
  | typeof DARK_BLUE
  | typeof MAGENTA
  | typeof INDIGO
  | UnparsedObject;
export const GRAY = "gray";
export const RED = "red";
export const ORANGE = "orange";
export const YELLOW = "yellow";
export const GREEN = "green";
export const LIGHT_BLUE = "light-blue";
export const DARK_BLUE = "dark-blue";
export const MAGENTA = "magenta";
export const INDIGO = "indigo";
