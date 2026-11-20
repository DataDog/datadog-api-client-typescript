import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesStackMode =
  | typeof AUTO
  | typeof NORMALIZE
  | UnparsedObject;
export const AUTO = "auto";
export const NORMALIZE = "normalize";
