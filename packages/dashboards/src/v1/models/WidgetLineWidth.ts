import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Width of line displayed.
 */
export type WidgetLineWidth =
  | typeof NORMAL
  | typeof THICK
  | typeof THIN
  | UnparsedObject;
export const NORMAL = "normal";
export const THICK = "thick";
export const THIN = "thin";
