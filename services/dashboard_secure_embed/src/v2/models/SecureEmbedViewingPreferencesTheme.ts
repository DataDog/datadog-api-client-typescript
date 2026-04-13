import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The theme of the shared dashboard view. `system` follows the viewer's system default.
 */
export type SecureEmbedViewingPreferencesTheme =
  | typeof SYSTEM
  | typeof LIGHT
  | typeof DARK
  | UnparsedObject;
export const SYSTEM = "system";
export const LIGHT = "light";
export const DARK = "dark";
