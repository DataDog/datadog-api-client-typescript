import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesBackgroundType =
  | typeof AREA
  | typeof BARS
  | UnparsedObject;
export const AREA = "area";
export const BARS = "bars";
