import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetLineType =
  | typeof DASHED
  | typeof DOTTED
  | typeof SOLID
  | UnparsedObject;
export const DASHED = "dashed";
export const DOTTED = "dotted";
export const SOLID = "solid";
