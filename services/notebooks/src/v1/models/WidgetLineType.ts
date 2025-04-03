import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of lines displayed.
 */
export type WidgetLineType =
  | typeof DASHED
  | typeof DOTTED
  | typeof SOLID
  | UnparsedObject;
export const DASHED = "dashed";
export const DOTTED = "dotted";
export const SOLID = "solid";
