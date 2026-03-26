import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of specification used by the wildcard widget.
 */
export type WildcardWidgetSpecificationType =
  | typeof VEGA
  | typeof VEGA_LITE
  | UnparsedObject;
export const VEGA = "vega";
export const VEGA_LITE = "vega-lite";
