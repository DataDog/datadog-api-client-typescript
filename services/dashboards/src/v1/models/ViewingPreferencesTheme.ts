import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The theme of the shared dashboard view. "system" follows your system's default viewing theme.
 */
export type ViewingPreferencesTheme =
  | typeof SYSTEM
  | typeof LIGHT
  | typeof DARK
  | UnparsedObject;
export const SYSTEM = "system";
export const LIGHT = "light";
export const DARK = "dark";
