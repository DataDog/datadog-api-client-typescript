import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls the display of the search bar.
 */
export type TableWidgetHasSearchBar =
  | typeof ALWAYS
  | typeof NEVER
  | typeof AUTO
  | UnparsedObject;
export const ALWAYS = "always";
export const NEVER = "never";
export const AUTO = "auto";
