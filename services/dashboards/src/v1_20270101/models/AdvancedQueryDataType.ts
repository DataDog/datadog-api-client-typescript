import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AdvancedQueryDataType =
  | typeof STRING
  | typeof GROUP
  | typeof INET
  | typeof INT64
  | typeof FLOAT64
  | typeof TIMESTAMP
  | typeof DATE
  | typeof INTERVAL
  | typeof BOOL
  | typeof JSON
  | typeof HSTORE
  | typeof ARRAYLTSTRINGGT
  | typeof ARRAYLTINT64GT
  | typeof ARRAYLTFLOAT64GT
  | typeof ARRAYLTTIMESTAMPGT
  | typeof ARRAYLTINTERVALGT
  | typeof ARRAYLTBOOLGT
  | typeof ARRAYLTJSONGT
  | UnparsedObject;
export const STRING = "string";
export const GROUP = "group";
export const INET = "inet";
export const INT64 = "int64";
export const FLOAT64 = "float64";
export const TIMESTAMP = "timestamp";
export const DATE = "date";
export const INTERVAL = "interval";
export const BOOL = "bool";
export const JSON = "json";
export const HSTORE = "hstore";
export const ARRAYLTSTRINGGT = "array<string>";
export const ARRAYLTINT64GT = "array<int64>";
export const ARRAYLTFLOAT64GT = "array<float64>";
export const ARRAYLTTIMESTAMPGT = "array<timestamp>";
export const ARRAYLTINTERVALGT = "array<interval>";
export const ARRAYLTBOOLGT = "array<bool>";
export const ARRAYLTJSONGT = "array<json>";
