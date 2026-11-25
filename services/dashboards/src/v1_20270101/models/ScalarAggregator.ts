import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScalarAggregator =
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | typeof LAST
  | typeof AREA
  | typeof L2NORM
  | typeof PERCENTILE
  | typeof STDDEV
  | typeof COUNT_UNIQUE
  | UnparsedObject;
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
export const LAST = "last";
export const AREA = "area";
export const L2NORM = "l2norm";
export const PERCENTILE = "percentile";
export const STDDEV = "stddev";
export const COUNT_UNIQUE = "count_unique";
