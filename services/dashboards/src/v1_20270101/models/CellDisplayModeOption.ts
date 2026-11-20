import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CellDisplayModeOption =
  | typeof NUMBER
  | typeof BAR
  | typeof TREND
  | UnparsedObject;
export const NUMBER = "number";
export const BAR = "bar";
export const TREND = "trend";
