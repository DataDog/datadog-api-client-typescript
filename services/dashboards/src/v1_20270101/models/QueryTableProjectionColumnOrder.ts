import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type QueryTableProjectionColumnOrder =
  | typeof QUERY
  | typeof DIMENSIONS
  | UnparsedObject;
export const QUERY = "query";
export const DIMENSIONS = "dimensions";
