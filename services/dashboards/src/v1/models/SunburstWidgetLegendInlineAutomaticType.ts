import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to show the legend inline or let it be automatically generated.
 */
export type SunburstWidgetLegendInlineAutomaticType =
  | typeof INLINE
  | typeof AUTOMATIC
  | UnparsedObject;
export const INLINE = "inline";
export const AUTOMATIC = "automatic";
