import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Top list widget stacked legend behavior.
 */
export type ToplistWidgetLegend =
  | typeof AUTOMATIC
  | typeof INLINE
  | typeof NONE
  | UnparsedObject;
export const AUTOMATIC = "automatic";
export const INLINE = "inline";
export const NONE = "none";
