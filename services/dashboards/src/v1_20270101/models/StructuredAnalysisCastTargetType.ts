import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type StructuredAnalysisCastTargetType =
  | typeof STRING
  | typeof INT64
  | typeof FLOAT64
  | typeof TIMESTAMP
  | UnparsedObject;
export const STRING = "string";
export const INT64 = "int64";
export const FLOAT64 = "float64";
export const TIMESTAMP = "timestamp";
