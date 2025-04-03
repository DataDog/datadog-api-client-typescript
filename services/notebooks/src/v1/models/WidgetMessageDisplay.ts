import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Amount of log lines to display
 */
export type WidgetMessageDisplay =
  | typeof INLINE
  | typeof EXPANDED_MEDIUM
  | typeof EXPANDED_LARGE
  | UnparsedObject;
export const INLINE = "inline";
export const EXPANDED_MEDIUM = "expanded-md";
export const EXPANDED_LARGE = "expanded-lg";
