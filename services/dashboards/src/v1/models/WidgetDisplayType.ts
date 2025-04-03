import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of display to use for the request.
 */
export type WidgetDisplayType =
  | typeof AREA
  | typeof BARS
  | typeof LINE
  | typeof OVERLAY
  | UnparsedObject;
export const AREA = "area";
export const BARS = "bars";
export const LINE = "line";
export const OVERLAY = "overlay";
