import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetDisplayType =
  | typeof OVERLAY
  | typeof AREA
  | typeof LINE
  | typeof BARS
  | typeof ADJACENT_BARS
  | UnparsedObject;
export const OVERLAY = "overlay";
export const AREA = "area";
export const LINE = "line";
export const BARS = "bars";
export const ADJACENT_BARS = "adjacent_bars";
