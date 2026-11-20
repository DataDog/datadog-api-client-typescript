import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WidgetLineWidth =
  | typeof NORMAL
  | typeof THICK
  | typeof THIN
  | UnparsedObject;
export const NORMAL = "normal";
export const THICK = "thick";
export const THIN = "thin";
